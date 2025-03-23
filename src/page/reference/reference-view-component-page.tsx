import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Code from "../../view/code";

@route('/reference/view-component')
@view()
class ReferenceViewComponentPage {

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu type={'reference'} />
        <div>
          <Header1>视图组件</Header1>
          <div>视图组件就是所有具有view装饰器或者view复合装饰器的组件。</div>
          <Header2>children</Header2>
          <Header2>ref</Header2>
        </div>
      </div>
    </div>
  }
}

export default ReferenceViewComponentPage;
