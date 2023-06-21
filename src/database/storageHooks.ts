import { UserDTO } from "@dtos/UserDTO";
import { getRealm } from "./useRealm";

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
}


export async  function storageUserSave(userData: UserDTO) {
  const realm = await getRealm();

  console.log('storageUserSave-UserData =>', userData);

  if(userData.id, userData.name, userData.email, userData.avatar, userData.updated_at, userData.created_at) {
    console.log('TA CERTO')
  } else {
    console.log('DEU CERTO NÃO :(')
  }

  //O problema esta Aqui
  try {
    realm.write(() => {
      const createdRealmUser = realm.create('UserRealm',{
        _id: userData.id,
        name: userData.name,
        email: userData.email,
        avatar: userData.avatar,
        created_at: userData.created_at,
        updated_at: userData.updated_at
      })

      console.log('Realm =>',createdRealmUser)
    });
    
  } catch (error) {
    throw error
  } finally {
    realm.close();
  }
}

export async function storageUserGet() {
  const realm = await getRealm();

  try {

    const user = realm.objects<UserDTO>('UserRealm').toString()

    return user;

  } catch (error) {
    throw error
  } finally {
    realm.close();
  }
}

export async function storageUserRemove() {
  const realm = await getRealm();

  try {
    realm.delete('UserRealm')
  } catch (error) {
    
  } finally {
    realm.close();
  }
}

export async  function storageAuthTokenSave({token, refresh_token}: StorageAuthTokenProps) {
  const realm = await getRealm();

  console.log('AuthToken =>', token, refresh_token);

  try {
    realm.write(() => {
      const createdRealmToken = realm.create('AuthRealm',{
        token: token,
        refresh_token: refresh_token
       })
    
       console.log('AuthTokenSave =>',createdRealmToken)
     });
    
  } catch (error) {
    throw error
  } finally {
    realm.close();
  }
}

export async function storageAuthTokenGet(): Promise<StorageAuthTokenProps | null> {
  const realm = await getRealm();

  try {
    const authTokens = realm.objects<StorageAuthTokenProps>('AuthRealm').toJSON();

    if (authTokens.length > 0) {
      const { token, refresh_token } = authTokens[0] as StorageAuthTokenProps;
      return { token: token.toString(), refresh_token: refresh_token.toString() };
    } else {
      return null; // Retorna null se não houver tokens salvos
    }
  } catch (error) {
    throw error;
  } finally {
    realm.close();
  }
}


export async  function storageAuthTokenRemove() {
  const realm = await getRealm();

  try {
    realm.delete('AuthRealm')
  } catch (error) {
    throw error
  } finally {
    realm.close();
  }
}

