import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Card from "../../view/card";
import Code from "../../view/code";

@route('/reference/service')
@view()
class ReferenceServicePage {
  code = `
@service()
class UserService {
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
          <Header1>@service</Header1>
          <div>service用于申明被装饰的类是服务类，服务类比较内聚，只关心本服务相关的业务。</div>
          <Header2>装饰class</Header2>
          <Code code={this.code} />
          <Card>
            <div>注意</div>
            <ul>
              <li>源文件放在src/service文件夹下</li>
            </ul>
          </Card>
          <div></div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceServicePage;
