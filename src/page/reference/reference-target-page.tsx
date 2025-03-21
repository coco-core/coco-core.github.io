import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";

@route('/reference/target')
@view()
class ReferenceTargetPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>@target</Header1>
          <div>target装饰器只用于装饰元数据类，用于标记元数据对应的装饰器的装饰目标。</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceTargetPage;
