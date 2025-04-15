import {page, route, Router, autowired, bind} from 'coco-mvc';
import { Button } from 'cocojs-component-demo'
import HeaderBar from "@/view/header-bar";

@route('/')
@page()
class IndexPage {

  @autowired()
  private router: Router;

  @bind()
  clickReference() {
    this.router.navigateTo('/reference/overview');
  }

  @bind()
  clickQuickStart() {
    this.router.navigateTo('/learn/overview');
  }

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-col items-center py-20'}>
        <div className={'text-7xl text-primary'}>
          coco-mvc
        </div>
        <div className={'text-3xl mt-4'}>
          使用<span className={'text-primary'}>@装饰器</span>构建可扩展的Web应用
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Button type={'primary'} onClick={this.clickQuickStart}>快速上手</Button>
        <div className={'mx-2'} />
        <Button onClick={this.clickReference}>参考文档</Button>
      </div>
    </div>
  }
}

export default IndexPage;
