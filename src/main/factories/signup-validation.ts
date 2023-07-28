import { RequiredFieldValidarion } from '../../presentation/helpers/validators/required-field-validarion'
import { type Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidarion(field))
  }
  return new ValidationComposite(validations)
}
