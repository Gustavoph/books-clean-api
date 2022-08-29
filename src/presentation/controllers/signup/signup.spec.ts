import { SignUpController } from './signup'
import { HttpRequest } from '../protocols/http'

describe('SignUp Controller', () => {
  test('Should return 400 if name is not provided', async () => {
    const sut = new SignUpController()
    const httpRequest: HttpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
