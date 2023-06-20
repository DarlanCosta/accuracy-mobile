import Realm from "realm";
import { Dataschema } from "./schemas/DataSchema";

export const getRealm = async () => await Realm.open({
  path: "accuracy-app",
  schema: [Dataschema]
})