import {  DataCardProps } from '@components/DataCard';
import { VStack } from 'native-base';
import { useCallback, useEffect, useState } from 'react';
import storage from '../database/storage';
import { Button } from '@components/Button';
import { DataList } from '@components/DataList';
import { useData } from '@hooks/useData';
import { useFocusEffect } from '@react-navigation/native';

export const ListDataScreen = () => {

  const { handleListCollect, data } = useData();

  useFocusEffect(
    useCallback(() => {
      handleListCollect()
    },[])
  )
  
  return (
    <VStack flex={1} backgroundColor='bgColor' justifyContent='center' alignItems='center'>
      <DataList data={data} />
    </VStack>
  );
};
