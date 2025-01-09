import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/component')
@view()
class ReferenceComponentPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@component</h1>
          <div>component装饰器是类装饰器，只有被component装饰的类才可以被实例化</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceComponentPage;
