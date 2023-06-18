import { DataContext } from '@contexts/DataContextInsert';
import { useContext } from 'react';


export function useData() {
  const context = useContext(DataContext);

  return context;
}