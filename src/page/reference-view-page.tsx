import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/view')
@view()
class ReferenceViewPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@view装饰器</h1>
          <h2>装饰class</h2>
          <div>装饰class用于表明被装饰的类是视图类，可以用于描述页面或组件</div>
          <div>视图组件的位置是约定好的：如果描述页面，类应该放在page文件夹下；如果描述组件，应该放在view文件夹下</div>
          <h2>装饰method</h2>
          <div>装饰method用于表明这个方法是描述页面的，该方法应该返回一个jsx</div>
          <div>view装饰的类内部应该有且只有一个view装饰的方法。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceViewPage;
