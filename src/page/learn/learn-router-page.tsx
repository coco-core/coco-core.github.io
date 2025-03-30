import {route, page} from "coco-mvc";
import SideMenu from "@/view/side-menu";
import Header1 from "@/view/header-1";
import Header2 from "@/view/header-2";
import Code from "@/view/code";
import Card from "@/view/card";
import ContentLayout from "@/layout/content-layout";

@route('/learn/router')
@page()
class LearnRouterPage {
  code = `
@route('/learn/router')
@view()
class LearnRouterPage {
}
`

  code1 = `
@view()
class LearnRouterPage {
  @autowired()
  private router: Router;
  
  @bind()
  clickBtn() {
    this.router.navigateTo("/")
  } 
  
  render() {
    return <button onClick={this.clickBtn}>跳转首页</button>
  }
}
`

  render() {
    return <ContentLayout sideMenu={<SideMenu />}>
      <Header1>路由</Header1>
      <Header2>页面绑定URL</Header2>
      <div>通过给page组件添加@route即可绑定相应的url。</div>
      <div>例如给本页面对应的组件关联/learn/router：</div>
      <Code code={this.code} />
      <Header2>页面跳转</Header2>
      <div>路由跳转通过自动注入的router对象上的navigateTo方法实现，例如：</div>
      <Code code={this.code1} />
      <Card>
        目前框架仅支持history路由，hash路由待支持。
      </Card>
    </ContentLayout>
  }
}

export default LearnRouterPage;