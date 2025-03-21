import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";

@route('/reference/reactive-autowired')
@view()
class ReferenceReactiveAutowiredPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>@reactiveAutowired装饰器</Header1>
          <div>reactiveAutowired声明一个field是响应式的，修改field就会触发页面的重新渲染。</div>
          <div>reactiveAutowired必须和@store配合使用，用于订阅全局的状态，当其他组件修改全局状态时，其他组件都会重新渲染。</div>
          <div>只有在view组件内部生效。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceReactiveAutowiredPage;
