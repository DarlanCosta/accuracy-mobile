import Realm from "realm";
import { DataSchema } from "./schemas/DataSchema";
import { UserSchema } from "./schemas/UserSchema";
import { AuthTokenSchema } from "./schemas/AuthTokenSchema";

export const getRealm = async () => await Realm.open({
  path: "accuracy-app",
  schema: [DataSchema, UserSchema, AuthTokenSchema ]
})