export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      captureDataScreen: {
       name: string;
       ean: number;
       amount: number;
       amount_packing: number;
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