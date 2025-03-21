import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";

@route('/reference/route')
@view()
class ReferenceRoutePage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>@route</Header1>
          <div>route装饰器定义一个url地址，关联某个页面和url。</div>
          <div>route只能在src/page文件夹使用，且对应的类同时有view装饰器</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceRoutePage;
