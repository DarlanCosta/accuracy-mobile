import { Realm } from "@realm/react"

type GenerateProps = {
  user_id: string;
  name: string;
  email: string;
}

export class User extends Realm.Object<User> {
  _id!: string;
  user_id!: string;
  name!: string;
  email!: string;

  static generate({ user_id, name, email }:GenerateProps){
    return {
      _id: new Realm.BSON.UUID(),
      user_id,
      name,
      email
    };
  }

  static Schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      user_id: {
        type: 'string',
        indexed: true
      },
      name: 'string',
      email: 'string'
    }
  }
};