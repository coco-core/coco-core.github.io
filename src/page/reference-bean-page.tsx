import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";

@route('/reference/bean')
@view()
class ReferenceBeanPage {
  @view()
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <h1>@bean</h1>
          <div>bean装饰类的method，用于配置第三方组件</div>
          <div>注意@bean主要和@configuration一起使用时才有用</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceBeanPage;
