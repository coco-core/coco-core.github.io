import {route, page, reactive, bind, Router, autowired} from "coco-mvc";
import SideMenu from "@/view/side-menu";
import { Header1, Header2, Code, InlineCode, CodePanel, Button, Table } from "cocojs-component-demo";
import ContentLayout from "@/layout/content-layout";

@route('/learn/advance-what-is-component')
@page()
class LearnAdvanceWhatIsComponentPage {
  render() {
    return <ContentLayout sideMenu={<SideMenu />}>
      <Header1>coco-mvc中的组件</Header1>
      coco-mvc框架和一般前端框架中的组件概念是太不一致的，
      一般前端框架中的组件是指多个浏览器标签组合起来的可复用的逻辑单元，
      在coco-mvc中，组件是指添加了@component、@view、@api等装饰器的类，不同的装饰器用于标识不同类型的可复用逻辑单元，
      @view标识视图类型的组件，@api标识网络请求的组件，@component标识通用的组件，
      可以说带有@view装饰器的组件和一般端框架中的组件是一样的概念。
      上面提到@component、@view、@api装饰器都可以将类标识成一个组件，框架还提供了更多的装饰器用于标记不同的类型：
      * @component
      * @view
      * @page
      * @layout
      * @controller
      * @api
      * @globalData
      * @render
      * @store
      * @router
    </ContentLayout>
  }
}

export default LearnAdvanceWhatIsComponentPage;