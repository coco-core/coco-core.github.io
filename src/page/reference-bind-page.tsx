import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";
import Header1 from "../view/header-1";
import Header2 from "../view/header-2";
import Card from "../view/card";

@route('/reference/bind')
@view()
class ReferenceBindPage {
  code1 = '@view()'
  code2 = 'class IndexPage {'
  code3 = '@bind()'
  code4 = 'onClick() {}'
  code5 = '}'

  @view()
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div className={'flex-auto p-4'}>
          <Header1>@bind</Header1>
          <div>bind是method装饰器，用于绑定被装饰方法的this到当前实例</div>
          <div>
            <div>{this.code1}</div>
            <div>{this.code2}</div>
            <div>&nbsp;&nbsp;{this.code3}</div>
            <div>&nbsp;&nbsp;{this.code4}</div>
            <div>{this.code5}</div>
          </div>
          <Header2>装饰method</Header2>
          <Card>
            <div>注意</div>
            <ul>
              <li>渲染函数不需要手动@bind，框架内部会自动绑定视图类实例。</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  }
}

export default ReferenceBindPage;
