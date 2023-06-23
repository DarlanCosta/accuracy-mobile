import { ReactNode, createContext, useState } from "react";
import { DataDTO } from "@dtos/DataDTO";
import uuid from 'react-native-uuid';
import { useRealm } from "../../src/lib/realm/index";
import { Data } from "../../src/lib/realm/schemas/DataSchema";

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
    const realm = useRealm();

    try {
      realm.write(() => {
       const created = realm.create('Data', Data.generate({
        name: data.name,
        ean: data.ean,
        amount: data.amount,
        amount_packing: data.amount_packing,
      }))

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