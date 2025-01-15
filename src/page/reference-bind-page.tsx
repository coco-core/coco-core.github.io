import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/bind')
@view()
class ReferenceBindPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@bind</h1>
          <div>bind装饰器用于装饰method，在组件实例化的时候会自动将方法的this绑定到当前实例</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceBindPage;
