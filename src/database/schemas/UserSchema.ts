export const UserSchema = {
  name: 'UserRealm',
  properties: {
    _id: 'string',
    name: 'string',
    email: 'string',
    avatar: 'string',
    created_at: 'string',
    updated_at: 'string'
  },
  primaryKey: '_id',
};