import { Realm } from "@realm/react"

type GenerateProps = {
  name: string;
  ean: string;
  amount: string;
  amount_packing: string;
}

export class Data extends Realm.Object<Data> {
  _id!: string;
  name!: string;
  ean!: string;
  amount!: string;
  amount_packing!: string;
  
  static generate({ name, ean, amount, amount_packing }:GenerateProps){
    return {
      _id: new Realm.BSON.UUID(),
      name,
      ean,
      amount,
      amount_packing
    };
  }

  static Schema = {
    name: 'Data',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      name: 'string',
      ean: 'string',
      amount: 'string',
      amount_packing: 'string',
    },
  }
};