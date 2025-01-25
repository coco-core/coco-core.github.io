import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";
import Header1 from "../view/header-1";
import Card from "../view/card";
import Header2 from "../view/header-2";

@route('/reference/reactive')
@view()
class ReferenceReactivePage {
  code1 = '@view()'
  code2 = 'class IndexPage {'
  code3 = '@reactive()'
  code4 = 'count: string;'
  code5 = '}'

  @view()
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div className={'flex-auto p-4'}>
          <Header1>@reactive</Header1>
          <div>reactive是field装饰器，用于给组件添加一个响应式字段。</div>
          <div>
            <div>{this.code1}</div>
            <div>{this.code2}</div>
            <div>&nbsp;&nbsp;{this.code3}</div>
            <div>&nbsp;&nbsp;{this.code4}</div>
            <div>{this.code5}</div>
          </div>
          <Header2>装饰field</Header2>
          <Card>
            <div>注意</div>
            <ul>
              <li>只在视图组件内部生效</li>
              <li>字段会被改成getter/setter</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  }
}

export default ReferenceReactivePage;
