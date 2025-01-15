import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/target')
@view()
class ReferenceTargetPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@target</h1>
          <div>target装饰器只用于装饰元数据类，用于标记元数据对应的装饰器的装饰目标。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceTargetPage;
