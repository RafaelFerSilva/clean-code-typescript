import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcrypterAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcrypterAdapter = new BcrypterAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcrypterAdapter, accountMongoRepository)
  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
