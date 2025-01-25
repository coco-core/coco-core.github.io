import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/init')
@view()
class ReferenceInitPage {
  @view()
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@init</h1>
          <div>init装饰器装饰方法，用于标记ioc组件的初始化方法。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceInitPage;
