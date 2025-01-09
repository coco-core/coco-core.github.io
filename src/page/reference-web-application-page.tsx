import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/webApplication')
@view()
class ReferenceApplicationPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@webApplication</h1>
          <div>webApplication装饰器只能装饰类，表明这个应用是一个coco-mvc应用</div>
          <div>@webApplication只能作用在src/application.ts中default export的类上</div>
          <div>被装饰的类同时也是配置类，第三方组件配置可以放在这里。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceApplicationPage;
