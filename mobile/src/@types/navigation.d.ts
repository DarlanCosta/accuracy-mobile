export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      captureDataScreen: {
       name: string;
       ean: number;
       amount: string;
       amount_packing: string;
      },
      homeScreen: undefined;
      listDataScreen: undefined;
      listProductsScreen: undefined;
      syncProductsScreen: undefined;
      uploadScreen: undefined;
      settingsScreen: undefined;
    }
  }
}