import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/start')
@view()
class ReferenceStartPage {
  @view()
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@start</h1>
          <div>start装饰器装饰方法，用于标记ioc组件的启动方法。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceStartPage;
