import { page, route } from 'coco-mvc';
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Card from "../../view/card";
import Code from "../../view/code";
import ContentLayout from "../../layout/content-layout";

@route('/reference/controller')
@page()
class ReferenceControllerPage {
  code = `
@controller()
class UserController {
  async login() {}
  
  async logout() {}
}
  `
  render() {
    return <ContentLayout sideMenu={<SideMenu type={'reference'} />}>
      <Header1>@controller</Header1>
      <div>controller用于申明被装饰的类是某个模块的控制层类，控制层也是业务逻辑层，一般会调用多个服务类共同完成某个模块的工作。</div>
      <Header2>装饰class</Header2>
      <Code code={this.code} />
      <Card>
        <div>注意</div>
        <ul>
          <li>源文件放在src/controller文件夹下</li>
        </ul>
      </Card>
    </ContentLayout>
  }
}

export default ReferenceControllerPage;
