import { view, route } from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";
import Header1 from "../view/header-1";
import Header2 from "../view/header-2";
import Card from "../view/card";
import Code from "../view/code";

@route('/reference/memoized')
@view()
class ReferenceMemoizedPage {
  code = `
@view()
class IndexPage {
  @memoized()
  calc() {}
}
`

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div className={'flex-auto p-4'}>
          <Header1>@memoized</Header1>
          <div>memoized是一个method装饰器，用于缓存一个被装饰方法的返回值。</div>
          <Code code={this.code} />
          <Header2>装饰method</Header2>
          <Card>
            <div>注意</div>
            <ul>
              <li>只在视图组件内部生效</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  }
}

export default ReferenceMemoizedPage;
