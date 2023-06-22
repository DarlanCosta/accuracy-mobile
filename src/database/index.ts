import { createRealmContext } from "@realm/react"

import { Data } from "./schemas/DataSchema";
import { User } from "./schemas/UserSchema";
import { AuthToken } from "./schemas/AuthTokenSchema";

export const { 
  RealmProvider, 
  useRealm, 
  useQuery, 
  useObject
} = createRealmContext({
  schema: [Data, User, AuthToken]
});