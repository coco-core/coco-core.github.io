import { page, route } from 'coco-mvc';
import SideMenu from "@/view/side-menu";
import { Header1, Header2, Code, Card } from "cocojs-component-demo";
import ContentLayout from "@/layout/content-layout";

@route('/reference/service')
@page()
class ReferenceServicePage {
  code = `
@service()
class UserService {
  async login() {}
  
  async logout() {}
}
  `
  render() {
    return <ContentLayout sideMenu={<SideMenu type={'reference'} />}>
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
    </ContentLayout>
  }
}

export default ReferenceServicePage;
