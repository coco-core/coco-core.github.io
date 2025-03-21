import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";

@route('/reference/overview')
@view()
class ReferenceOverviewPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>总览</Header1>
          <div>本部分提供框架暴露的装饰器的详尽说明</div>
          <Header2>基础</Header2>
          <ul>
            <li><span className={'text-blue-600'}>autowired</span>自动注入</li>
            <li><span className={'text-blue-600'}>reactiveAutowired</span>响应式自动注入</li>
            <li><span className={'text-blue-600'}>component</span>组件化</li>
            <li><span className={'text-blue-600'}>target</span>控制装饰目标范围</li>
          </ul>
          <Header2>mvc层次控制</Header2>
          <ul>
            <li><span className={'text-blue-600'}>view</span>视图</li>
            <li><span className={'text-blue-600'}>page</span>页面</li>
            <li><span className={'text-blue-600'}>controller</span>控制器</li>
            <li><span className={'text-blue-600'}>service</span>服务</li>
          </ul>
          <Header2>视图层</Header2>
          <ul>
            <li><span className={'text-blue-600'}>reactive</span>响应式</li>
            <li><span className={'text-blue-600'}>bind</span>this绑定</li>
            <li><span className={'text-blue-600'}>memoized</span>缓存</li>
            <li><span className={'text-blue-600'}>ref</span>直接引用组件</li>
            <li><span className={'text-blue-600'}>init</span>初始化工作</li>
            <li><span className={'text-blue-600'}>start</span>启动函数</li>
          </ul>
          <Header2>数据</Header2>
          <ul>
            <li><span className={'text-blue-600'}>store</span>全局状态</li>
            <li><span className={'text-blue-600'}>globalData</span>全局数据</li>
          </ul>
          <Header2>其他</Header2>
          <ul>
            <li><span className={'text-blue-600'}>webApplication</span>应用入口</li>
            <li><span className={'text-blue-600'}>route</span>路由</li>
            <li><span className={'text-blue-600'}>configuration</span>配置类</li>
          </ul>
        </div>
      </div>
    </div>
  }
}

export default ReferenceOverviewPage;
