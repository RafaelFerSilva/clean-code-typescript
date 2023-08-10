export interface UpdateAccessTokenReporsitory {
  updateAccesToken: (id: string, token: string) => Promise<void>
}
