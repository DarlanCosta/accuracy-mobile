import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from '@services/api';
import { UserDTO } from "@dtos/UserDTO";
import { useQuery, useRealm } from "@realm/react";


import { AuthToken } from "../../src/lib/realm/schemas/AuthTokenSchema";
import { User } from "../../src/lib/realm/schemas/UserSchema";

export type AuthContextDataProps = {
  user: UserDTO;
  singIn: (email: string, password: string) => void;
  updateUserProfile: (userUpdated: UserDTO) => void;
  signOut: () => void;
  isLoadingUserStorageData: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps)  {
  const realm = useRealm();

  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true); 

  function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
    setUser(userData);
  }

  function storageUserAndTokenSave(userData: UserDTO, token: string, refresh_token: string) {
    try {
      setIsLoadingUserStorageData(true)
      //Dentro do storageUserSave ta chegando os dados normalmente, mas o erro na na hora de guardar os dados, deixei comentado pra n dar erro

      console.log('storageUserSave-UserData =>', userData);

      if(userData.id, userData.name, userData.email, userData.avatar) {
        console.log('TA CERTO')
      } else {
        console.log('DEU CERTO NÃO :(')
      }

      //O problema esta Aqui
        realm.write(() => {
          const createdRealmUser = realm.create('User', User.generate({
            user_id: userData.id,
            name: userData.name,
            email: userData.email
          }))

          console.log('Realm =>',createdRealmUser)
        });

      //dentro do storageAuthTokenSave tbm esta chegando normalmente os dados tem um console.log pra teste lá
      console.log('AuthToken =>', token, refresh_token);
      
        realm.write(() => {
          const createdRealmToken = realm.create('AuthToken', AuthToken.generate({
            token: token,
            refresh_token: refresh_token
          }));
        
          console.log('AuthTokenSave =>',createdRealmToken)
        });
      
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function singIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      console.log(data)

      if(data.user && data.token && data.refresh_token) {
        storageUserAndTokenSave(data.user, data.token, data.refresh_token);
        userAndTokenUpdate(data.user, data.token)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);

      realm.write(() => {
        realm.delete(User)
      })
      
      realm.write(() => {
        realm.delete(AuthToken)
      })

    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  function updateUserProfile(userUpdated: UserDTO) {
    try {
      setUser(userUpdated);

      realm.write(() => {
        const createdRealmUser = realm.create('User', User.generate({
          user_id: userUpdated.id,
          name: userUpdated.name,
          email: userUpdated.email
        }))

        console.log('Realm =>',createdRealmUser)
      });
    } catch (error) {
      throw error;
    }
  }

  function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);

      useQuery(User)
      
      useQuery(AuthToken)
      
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }
  

  useEffect(() => {
    loadUserData()
  },[])

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    return () => {
      subscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={{ 
      user, 
      singIn,
      updateUserProfile,
      signOut,
      isLoadingUserStorageData
    }}>
      {children}
    </AuthContext.Provider>
  )
}