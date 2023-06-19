import { ReactNode, createContext } from "react";
import storage from "../database/storage"

import { DataDTO } from "@dtos/DataDTO";


export type DataContextProps = {
  handleInsertCollect: (data: DataDTO) => Promise<void>;
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

  return (
    <DataContext.Provider value={{ 
      handleInsertCollect,
    }}>
      {children}
    </DataContext.Provider>
  );
}