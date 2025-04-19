import { service } from 'coco-mvc'

@service()
class LoginService {
  async login(): Promise<string> {
    // mock http request
    return new Promise((resolve) => {
      const token = 'mock-token';
      setTimeout(() => {resolve(token)}, 1000)
    })
  }
}

export default LoginService;