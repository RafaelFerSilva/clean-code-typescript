import { type AccountModel, type AddAccountModel, type AddAccount, type Hasher, type AddAccountRepository } from './db-ad-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountrepository: AddAccountRepository
  ) {}

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.hasher.hash(accountData.password)
    const account = await this.addAccountrepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
