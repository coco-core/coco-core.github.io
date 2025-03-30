import { page, route } from 'coco-mvc';
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Card from "../../view/card";
import Code from "../../view/code";
import ContentLayout from "../../layout/content-layout";
import HeaderBar from "../../view/header-bar";

@route('/reference/layout')
@page()
class ReferenceLayoutPage {
  code = `
@layout()
class ContentLayout {
  props: { 
    sideMenu: any
    children: any
  }

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        {this.props.sideMenu}
        <div>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}
  `
  render() {
    return <ContentLayout sideMenu={<SideMenu type={'reference'} />}>
      <Header1>@layout</Header1>
      <div>@layout用于申明被装饰的类是布局类。</div>
      <Code code={this.code} />
      <Header2>装饰class</Header2>
      <Card>
        <div>注意</div>
        <ul>
          <li>布局类一般通过props来填充具体内容</li>
          <li>源文件放在src/layout文件夹下</li>
        </ul>
      </Card>
    </ContentLayout>
  }
}

export default ReferenceLayoutPage;
