export interface UpdateAccessTokenReporsitory {
  update: (id: string, token: string) => Promise<void>
}
