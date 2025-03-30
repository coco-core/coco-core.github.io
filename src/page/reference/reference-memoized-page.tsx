import { page, route } from 'coco-mvc';
import SideMenu from "@/view/side-menu";
import Header1 from "@/view/header-1";
import Header2 from "@/view/header-2";
import Card from "@/view/card";
import Code from "@/view/code";
import ContentLayout from "@/layout/content-layout";

@route('/reference/memoized')
@page()
class ReferenceMemoizedPage {
  code = `
@view()
class IndexPage {
  @memoized()
  calc() {}
}
`

  render() {
    return <ContentLayout sideMenu={<SideMenu type={'reference'} />}>
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
    </ContentLayout>
  }
}

export default ReferenceMemoizedPage;
