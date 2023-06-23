import { Realm } from "@realm/react"

type GenerateProps = {
  token: string;
  refresh_token: string;
}

export class AuthToken extends Realm.Object<AuthToken> {
  _id!: string;
  token!: string;
  refresh_token!: string;
  
  static generate({ token, refresh_token }:GenerateProps){
    return {
      _id: new Realm.BSON.UUID(),
      token,
      refresh_token
    };
  }

  static Schema = {
    name: 'AuthToken',
    primaryKey: '_id',
    properties: {
      _id: 'uuid',
      token: 'string',
      refresh_token: 'string'
    },
  }
};