import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/inject')
@view()
class ReferenceInjectPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@inject</h1>
          <div>inject装饰器和autowired类似，也是自动注入组件实例，但inject会把参数传递给类的构造函数，一般用于应用启动时必须要初始化的装配工作。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceInjectPage;
