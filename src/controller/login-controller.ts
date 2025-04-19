import {controller, autowired} from "coco-mvc";
import LoginService from "@/service/login-service";
import LocalStorage from "@/component/local-storage";

@controller()
class LoginController {
  @autowired()
  loginService: LoginService;

  @autowired()
  localStorage: LocalStorage;

  async login() {
    try {
      // 处理多个服务层的逻辑
      const token = await this.loginService.login();
      this.localStorage.set('token', token);
      return true;
    } catch (e) {
      return false
    }
  }
}

export default LoginController;