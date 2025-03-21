import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";

@route('/reference/store')
@view()
class ReferenceStorePage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>@store</Header1>
          <div>store装饰类用于将一个类定义成全局状态，当修改全局状态是，所有引入此全局状态的view都会重新渲染。</div>
          <div>注意：store需要配合reactiveAutowired使用</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceStorePage;
