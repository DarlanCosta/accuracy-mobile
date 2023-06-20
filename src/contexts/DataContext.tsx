import { ReactNode, createContext, useState } from "react";
import { DataDTO } from "@dtos/DataDTO";
import uuid from 'react-native-uuid';
import { getRealm } from "@database/useRealm";

export type DataContextProps = {
  data: DataDTO[];
  handleInsertCollect: (data: DataDTO) => void;
  handleDeleteCollect: () => void;
  handleListCollect: () => void;
}

type DataContextProviderProps = {
  children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export function DataContextProvider({ children }: DataContextProviderProps) {

  const [data, setData] = useState<DataDTO[]>([]);

  async function handleInsertCollect(data:DataDTO) {
    const realm = await getRealm();

    try {
      realm.write(() => {
       const created = realm.create('DataRealm',{
          _id: uuid.v4(),
          name: 'data.name',
          ean: 'data.ean',
          amount: 'data.amount',
          amount_packing: 'data.amount_packing',
        })

        console.log('Realm =>',created)
      });

    } catch (error) {
      throw error
    } finally {
      realm.close();
    }
  }

  function handleDeleteCollect() {
   
  }

  function handleListCollect() {
    
  }

  return (
    <DataContext.Provider value={{
      data,
      handleInsertCollect,
      handleDeleteCollect,
      handleListCollect
    }}>
      {children}
    </DataContext.Provider>
  );
}