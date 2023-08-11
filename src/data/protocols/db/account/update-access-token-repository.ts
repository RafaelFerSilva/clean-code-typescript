export interface UpdateAccessTokenReporsitory {
  updateAccessToken: (id: string, token: string) => Promise<void>
}
