import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/autowired')
@view()
class ReferenceAutowiredPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@autowired</h1>
          <div>autowired装饰器用于装饰字段，用于自动注入配置的组件</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceAutowiredPage;
