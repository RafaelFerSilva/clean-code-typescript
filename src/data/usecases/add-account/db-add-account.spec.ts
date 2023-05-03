import { DbAddAccount } from './db-add-account'

describe('DbAddAccount UseCase', () => {
  test('Should call encrypter with correct password', async () => {
    class EncrypyterStub {
      async encrypt (value: string): Promise<string> {
        return new Promise(resolve => { resolve('hashed_password') })
      }
    }
    const encrypterStub = new EncrypyterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
