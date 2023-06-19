import { ReactNode, createContext } from "react";
import storage from "../database/storage"

import { DataDTO } from "@dtos/DataDTO";


export type DataContextProps = {
  handleInsertCollect: (data: DataDTO) => Promise<void>;
  handleDeleteCollect: () => Promise<void>;
}

type DataContextProviderProps = {
  children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export function DataContextProvider({ children }: DataContextProviderProps) {

  async function handleInsertCollect(data: DataDTO) {
    storage.set('collects', JSON.stringify(data));
    console.log('Insert =>', data)
  }

  async function handleDeleteCollect() {
    storage.delete('collects');
    console.log( storage.getString('collects') )
  }

  return (
    <DataContext.Provider value={{ 
      handleInsertCollect,
      handleDeleteCollect
    }}>
      {children}
    </DataContext.Provider>
  );
}