import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Code from "../../view/code";

@route('/reference/web-component')
@view()
class ReferenceWebComponentPage {

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu type={'reference'} />
        <div>
          <Header1>浏览器组件</Header1>
          <div>浏览器组件支持的属性和事件。</div>
          <Header2>children</Header2>
          <Header2>ref</Header2>
          <Header2>className</Header2>
          <Header2>style</Header2>
          <Header2>onClick</Header2>
        </div>
      </div>
    </div>
  }
}

export default ReferenceWebComponentPage;
