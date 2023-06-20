export const AuthTokenSchema = {
  name: 'AuthRealm',
  properties: {
    token: 'string',
    refresh_token: 'string'
  },
  primaryKey: 'token',
};