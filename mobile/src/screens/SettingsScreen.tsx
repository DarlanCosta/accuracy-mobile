import { useTranslation } from 'react-i18next';
import { VStack, Text, Pressable } from 'native-base';

export const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <VStack flex={1} backgroundColor='white' justifyContent='center' alignItems='center'>
      <Pressable onPress={() => changeLanguage('pt')}>
        <Text color='gray.500'>{t('Configurações')}</Text>
      </Pressable>
    </VStack>
  );
};
