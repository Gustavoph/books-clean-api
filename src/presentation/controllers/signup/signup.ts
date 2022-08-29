import { badRequest } from '../../helpers/http'
import { MissingParamError, InvalidParamError } from '../../errors'
import { HttpRequest, HttpResponse, Controller } from './signup-protocols'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    if (httpRequest.body.password !== httpRequest.body.passwordConfirmation) {
      return badRequest(new InvalidParamError('passwordConfirmation'))
    }

    return {
      body: '',
      statusCode: 2
    }
  }
}
