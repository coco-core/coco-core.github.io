import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";
import Header2 from "../view/header-2";

@route('/reference/component')
@view()
class ReferenceComponentPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@component</h1>
          <Header2>装饰class</Header2>
          <div>使用component装饰的类会注册到ioc容器</div>
          <Header2>装饰method</Header2>
          <div>使用component装饰的方法的返回值也会注册到ioc容器，一般用于第三方组件的注册</div>
          <div></div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceComponentPage;
