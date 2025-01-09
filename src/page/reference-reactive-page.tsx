import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/reactive')
@view()
class ReferenceReactivePage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@reactive装饰器</h1>
          <div>reactive用于声明一个field是响应式的，当声明成响应式之后，修改field就会触发页面的重新渲染。</div>
          <div>注意这个装饰器会将field改为setter getter的形式。</div>
          <div>只有在view组件内部生效。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceReactivePage;
