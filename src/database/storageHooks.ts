import { UserDTO } from "@dtos/UserDTO";
import { getRealm } from "./useRealm";

type StorageAuthTokenProps = {
  token: string;
  refresh_token: string;
}


export async  function storageUserSave(userData: UserDTO) {
  const realm = await getRealm();
    
  try {
    realm.write(() => {
      const createdRealmUser = realm.create('UserRealm',{
        _id: userData.id,
        name: userData.name,
        email: userData.email,
        avatar: userData.avatar,
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

    const response = realm.objects<UserDTO>('UserRealm').toString()

    const user : UserDTO = response ? JSON.parse(response) : {}

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

  try {
    realm.write(() => {
      const createdRealmToken = realm.create('AuthRealm',{
        token: token,
        refresh_token: refresh_token
       })
    
       console.log('Realm =>',createdRealmToken)
     });
    
  } catch (error) {
    throw error
  } finally {
    realm.close();
  }
}

export async  function storageAuthTokenGet() {
  const realm = await getRealm();

  try {
    const response = realm.objects<StorageAuthTokenProps>('AuthRealm').toString()

    const { token, refresh_token }: StorageAuthTokenProps = response ? JSON.parse(response) : {}

    return { token, refresh_token };

  } catch (error) {
    throw error
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

