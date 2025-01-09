import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/overview')
@view()
class ReferenceOverviewPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>总览</h1>
          <div>coco-mvc使用类和装饰器构建web应用，所以在coco-mvc中，一切都是类。页面是类，组件是类，工具也是类。</div>
          <div>另一个核心和装饰器。装饰器目前还没有成为标准，但通过babel插件进行转译，装饰器使用@语法，无侵入的给类添加功能，更多了解可见：https://github.com/tc39/proposal-decorators</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceOverviewPage;
