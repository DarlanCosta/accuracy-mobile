import { createRealmContext } from "@realm/react"

import { Data } from "./schemas/DataSchema";
import { User } from "./schemas/UserSchema";
import { AuthToken } from "./schemas/AuthTokenSchema";

const realmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  type: Realm.OpenRealmBehaviorType.OpenImmediately
}

export const syncConfig: any = {
  flexible: true,
  newRealmFileBehavior: realmAccessBehavior,
  existingRealmFileBehavior: realmAccessBehavior
}

export const { 
  RealmProvider, 
  useRealm, 
  useQuery, 
  useObject
} = createRealmContext({
  schema: [Data, User, AuthToken]
});