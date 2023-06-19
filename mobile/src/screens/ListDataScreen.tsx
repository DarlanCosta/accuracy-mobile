import {  DataCardProps } from '@components/DataCard';
import { VStack } from 'native-base';
import { useState } from 'react';
import storage from '../database/storage';
import { Button } from '@components/Button';
import { DataList } from '@components/DataList';
import { useData } from '@hooks/useData';

export const ListDataScreen = () => {

  const { handleDeleteCollect, handleListCollect, data } = useData();

  function handlePress() {
    handleListCollect()
  }

  function handleDelete() {
    handleDeleteCollect()
  }
  
  return (
    <VStack flex={1} backgroundColor='bgColor' justifyContent='center' alignItems='center'>
      <Button title="List" w={32} onPress={handlePress} />
      <Button title="Delete" w={32} onPress={handleDelete} />
      <DataList data={data} />
    </VStack>
  );
};
