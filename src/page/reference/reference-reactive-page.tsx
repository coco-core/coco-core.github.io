import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Card from "../../view/card";
import Header2 from "../../view/header-2";
import Code from "../../view/code";

@route('/reference/reactive')
@view()
class ReferenceReactivePage {
  code = `
@view()
class IndexPage {
  @reactive()
  count: string;
}
  `

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu type={'reference'} />
        <div className={'flex-auto p-4'}>
          <Header1>@reactive</Header1>
          <div>reactive是field装饰器，用于给组件添加一个响应式字段。</div>
          <Code code={this.code} />
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
