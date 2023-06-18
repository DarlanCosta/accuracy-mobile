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
        backgroundColor: '#1A1A1A',
      },
      drawerActiveBackgroundColor: '#f5e500d8',
      headerTintColor: '#fff',
      drawerLabel: () => <Text className="text-sm text-slate-50">{t(text)}</Text>,
      drawerIcon: () => icon == 'settings' ? 
        <Ionicons name="settings" color="white" size={22} /> :
        <MaterialCommunityIcons name={icon} color="white" size={22} />
    }
    return result
  } 

  return (
    <Drawer.Navigator screenOptions={{ drawerStyle: { backgroundColor: '#1A1A1A' }}}>
      <Drawer.Screen 
        name="homeScreen" 
        component={HomeScreen}
        options={() => params('Home', 'home')} />
      <Drawer.Screen 
        name="captureDataScreen"
        component={CollectDataScreen}
        options={() => params('Coletar dados', 'barcode-scan')} 
      />
      <Drawer.Screen 
        name="listDataScreen"
        component={ListDataScreen}
        options={() => params('Listar dados capturados', 'list-status')} 
      />
      <Drawer.Screen 
        name="listProductsScreen"
        component={ListProductsScreen}
        options={() => params('Listar cadastro de produtos', 'view-list')} 
       
      />
      <Drawer.Screen 
        name="syncProductsScreen"
        component={SyncProductsScreen}
        options={() => params('Sincronizar cadastro de produtos', 'database-sync')} 
       
      />
      <Drawer.Screen 
        name="uploadScreen"
        component={UploadScreen}
        options={() => params('Enviar dados para o servidor', 'cloud-upload')} 
        
      />
      <Drawer.Screen 
        name="settingsScreen"
        component={SettingsScreen}
        options={() => params('Configurações', 'settings')} 
      
      />
    </Drawer.Navigator>
  )
}
