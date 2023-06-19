import { ReactNode, createContext, useState } from "react";
import storage from "../database/storage"

import { DataDTO } from "@dtos/DataDTO";
import { DataCardProps } from "@components/DataCard";


export type DataContextProps = {
  data: DataCardProps[];
  handleInsertCollect: (data: DataDTO) => void;
  handleDeleteCollect: () => void;
  handleListCollect: () => void;
}

type DataContextProviderProps = {
  children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export function DataContextProvider({ children }: DataContextProviderProps) {

  const [data, setData] = useState<DataCardProps[]>([]);

  function handleInsertCollect(data: DataDTO) {
    storage.set('collects', JSON.stringify(data));
    console.log('Insert =>', data)
  }

  function handleDeleteCollect() {
    storage.delete('collects');
    console.log( storage.getString('collects') )
  }

  function handleListCollect() {
    const responseList = storage.getString('collects');
    
    if (responseList) {
      const parsedData = JSON.parse(responseList);
      setData(parsedData);
      console.log('Data (before):', data);
      console.log('Data (after):', parsedData);
    }
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