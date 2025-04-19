import {route, page} from "../../../coconut-framework/packages/coco-mvc";
import SideMenu from "@/view/side-menu";
import { Header1, Header2, Code, Card } from "../../../coco-component-demo";
import ContentLayout from "@/layout/content-layout";

@route('/login-success')
@page()
class LoginSuccessPage {

  render() {
    return <div>登录成功，欢迎您！</div>
  }
}

export default LoginSuccessPage;