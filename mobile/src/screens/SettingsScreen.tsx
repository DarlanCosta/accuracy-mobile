import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <View className="flex-1 bg-background px-8 pt-16 items-center">
      <TouchableOpacity onPress={() => changeLanguage('pt')}>
        <Text className="text-slate-200 text-3xl">{t('Configurações')}</Text>
      </TouchableOpacity>
    </View>
  );
};
