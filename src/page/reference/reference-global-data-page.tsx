import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";

@route('/reference/global-data')
@view()
class ReferenceGlobalDataPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@globalData</h1>
          <div>globalData装饰类用于将一个类定义成全局变量类，顾名思义就是全局类的实例只有一个，所有组件共享。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceGlobalDataPage;
