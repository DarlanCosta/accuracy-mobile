import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'

const Drawer = createDrawerNavigator();

import { 
  HomeScreen,
  CollectDataScreen,
  ListDataScreen,
  ListProductsScreen,
  SettingsScreen,
  SyncProductsScreen,
  UploadScreen,
 } from '../screens';

export const AppRoutes = () => {
  const { t } = useTranslation();

  const params = (text: string, icon: string) => {
    const result : DrawerNavigationOptions = {
      headerTitle: () => <Text className="text-lg text-slate-50">{t(text)}</Text> , 
      headerStyle: {
        backgroundColor: '#364D9D',
      },
      headerTintColor: '#fff',
      drawerLabel: () => <Text className="text-sm text-slate-50">{t(text)}</Text>,
      drawerIcon: () => icon == 'settings' ? 
        <Ionicons name="settings" color="white" size={22} /> :
        <MaterialCommunityIcons name={icon} color="white" size={22} />
    }
    return result
  } 

  return (
    <Drawer.Navigator screenOptions={{ drawerStyle: { backgroundColor: '#364D9D' }}}>
      <Drawer.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={() => params('Home', 'home')} />
      <Drawer.Screen 
        name="CaptureDataScreen"
        component={CollectDataScreen}
        options={() => params('Coletar dados', 'barcode-scan')} 
      />
      <Drawer.Screen 
        name="ListDataScreen"
        component={ListDataScreen}
        options={() => params('Listar dados capturados', 'list-status')} 
      />
      <Drawer.Screen 
        name="ListProductsScreen"
        component={ListProductsScreen}
        options={() => params('Listar cadastro de produtos', 'view-list')} 
       
      />
      <Drawer.Screen 
        name="SyncProductsScreen"
        component={SyncProductsScreen}
        options={() => params('Sincronizar cadastro de produtos', 'database-sync')} 
       
      />
      <Drawer.Screen 
        name="UploadScreen"
        component={UploadScreen}
        options={() => params('Enviar dados para o servidor', 'cloud-upload')} 
        
      />
      <Drawer.Screen 
        name="SettingsScreen"
        component={SettingsScreen}
        options={() => params('Configurações', 'settings')} 
      
      />
    </Drawer.Navigator>
  )
}
