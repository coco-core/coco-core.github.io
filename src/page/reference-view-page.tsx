import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";
import Header1 from "../view/header-1";
import Header2 from "../view/header-2";
import Card from "../view/card";
import Code from "../view/code";

@route('/reference/view')
@view()
class ReferenceViewPage {
  code = `
@view()
class IndexPage {
  @view()
  render() {
    return <div>hello world</div>
  }
}
  `

  @view()
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div className={'flex-auto p-4'}>
          <Header1>@view</Header1>
          <div>view既是class装饰器，也是method装饰器，共同申明一个视图类。</div>
          <Code code={this.code} />
          <Header2>装饰class</Header2>
          <div>表示将被装饰的类注册成视图组件，用于描述页面或组件</div>
          <Card>
            <div>注意</div>
            <ul>
              <li>如果描述页面，源文件放在page文件夹下</li>
              <li>如果描述组件，源文件放在view文件夹下</li>
            </ul>
          </Card>
          <Header2>装饰method</Header2>
          <div>表示被装饰的方式就是渲染函数，该方法应该返回一个jsx对象</div>
          <Card>
            <div>注意</div>
            <ul>
              <li>
                每个视图组件内部有且只有一个渲染函数
              </li>
            </ul>
          </Card>
          <div></div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceViewPage;
