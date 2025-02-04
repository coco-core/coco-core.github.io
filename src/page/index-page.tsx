import {view, route, Router, autowired, bind} from 'coco-mvc';
import HeaderBar from "../view/header-bar";
import Button from '../view/button'

@route('/')
@view()
class IndexPage {

  @autowired()
  private router: Router;

  @bind()
  handleClick() {
    this.router.navigateTo('/reference/view')
  }

  @view()
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-col items-center py-20'}>
        <div className={'text-7xl text-amber-800'}>
          coco-mvc
        </div>
        <div className={'text-3xl mt-4'}>
          使用<span className={'text-amber-800'}>@装饰器</span>构建可扩展的WEB应用
        </div>
      </div>
      <div className={'flex justify-center'}>
        <Button label={'参考文档'} onClick={this.handleClick}></Button>
      </div>
    </div>
  }
}

export default IndexPage;
