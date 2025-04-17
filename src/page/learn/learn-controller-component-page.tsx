import {route, page, reactive} from "coco-mvc";
import SideMenu from "@/view/side-menu";
import { Header1, Code, Card } from "cocojs-component-demo";
import ContentLayout from "@/layout/content-layout";

@route('/learn/controller-component')
@page()
class LearnControllerComponentPage {
  code = `
@controller()  
class LoginController {
  @autowired()
  loginService: LoginService;

  @autowired()
  localStorage: LocalStorage;
  
  login() {
    try {
      // 处理多个服务层的逻辑，但不关心具体实现
      const { token } = this.loginService.login();
      this.localStorage.set('token', token);
      return true;
    } catch (e) {
      return false
    }
  }
}
  `;

  render() {
    return <ContentLayout sideMenu={<SideMenu />}>
      <Header1>控制组件</Header1>
      控制组件是指控制层的组件，主要用于组织服务层组件，控制业务流程，例如登录操作：
      <Code code={this.code} />
      <Card>
        因为服务层组件或者工具类都是专注于单一模块的，所以模块之间的耦合通过控制层来实现。将来业务流程有变动，也只需要修改控制层组件即可。
      </Card>
    </ContentLayout>
  }
}

export default LearnControllerComponentPage;