import { ReactNode, createContext, useCallback } from "react";
import storage from "../database/storage"

import { DataDTO } from "@dtos/DataDTO";


export type DataContextProps = {
  handleInsertCollect: (data: DataDTO) => void;
  handleGetCollect: () => Promise<void>;
  handleDeleteCollect: () => Promise<void>;
  handleUpdateCollect: () => Promise<void>;
}

type DataContextProviderProps = {
  children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export function DataContextProviderSave({ children }: DataContextProviderProps) {

  async function handleInsertCollect(data: DataDTO) {
    storage.set('collects', JSON.stringify(data));

    console.log('Insert =>', data)
  }

  const handleGetCollect = useCallback(async () => {
   
  }, []);

  const handleDeleteCollect = useCallback(async () => {
    
  }, []);

  const handleUpdateCollect = useCallback(async () => {
   
  }, []);

  return (
    <DataContext.Provider value={{ 
      handleDeleteCollect,
      handleGetCollect,
      handleInsertCollect,
      handleUpdateCollect
    }}>
      {children}
    </DataContext.Provider>
  );
}