import {route, page, reactive} from "coco-mvc";
import SideMenu from "@/view/side-menu";
import Header1 from "@/view/header-1";
import Header2 from "@/view/header-2";
import Code from "@/view/code";
import Card from "@/view/card";
import ContentLayout from "@/layout/content-layout";

@route('/learn/service-component')
@page()
class LearnServiceComponentPage {
  code = `
@service()  
class UserService () {
  login() { this.axios.post("/user/login") }
  create() { this.axios.post("/user/create") }
  detail() { this.axios.post("/user/detail") }
}
  `;

  code1 = `
@service()  
class UserService () {
  login() { this.axios.post("/user/login") }
  create() { this.axios.post("/user/create") }
  detail() { this.axios.post("/user/detail") }
}

@service()  
class TodoService () {
  list() { this.axios.post("/todo/list") }
  add() { this.axios.post("/todo/add") }
  complete() { this.axios.post("/todo/complete") }
}
`

  render() {
    return <ContentLayout sideMenu={<SideMenu />}>
      <Header1>服务组件</Header1>
      服务层主要用于封装业务逻辑，那什么是业务逻辑？就是具有业务意义的操作。例如：用户登录，用户创建，用户信息获取。
      <Code code={this.code} />
      这里把用户相关的网络请求都封装在一个类中，作为一个服务。
      <div>现在我们还需要另外一个业务模块，例如：获取待办，新增待办，完成待办</div>
      <Code code={this.code1} />
      <Card>
        注意：这里额外新增TodoService类，而不是把待办的操作放在UserService类中，这是因为业务模块应该保持高内聚，所以服务组件也保持高内聚。
      </Card>
    </ContentLayout>
  }
}

export default LearnServiceComponentPage;