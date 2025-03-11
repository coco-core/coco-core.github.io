import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Card from "../../view/card";
import Code from "../../view/code";

@route('/reference/controller')
@view()
class ReferenceControllerPage {
  code = `
@controller()
class UserController {
  async login() {}
  
  async logout() {}
}
  `
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div className={'flex-auto p-4'}>
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
          <div></div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceControllerPage;
