import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/memoized')
@view()
class ReferenceMemoizedPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@memoized装饰器</h1>
          <div>memoized用于缓存一个函数的结果，如果memoized计算涉及到的reactive字段都没有修改的话，那么组件重新渲染时也会使用缓存的值。</div>
          <div>memoized装饰的类只有在view组件内部生效。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceMemoizedPage;
