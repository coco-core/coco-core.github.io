import { view, route } from 'coco-mvc';
import Button from '../view/button'

@route('/')
@view()
class IndexPage {
  @view()
  h() {
    return <div className={'w-full pt-14'}>
      <div className={'fixed flex flex-row justify-between items-center top-0 left-0 w-full px-8 h-14 border-b border-gray-200'}>
        v0.0.1-alpha
      </div>
      <div className={'flex flex-col items-center py-20'}>
        <div className={'text-7xl text-amber-800'}>
          coco-mvc
        </div>
        <div className={'text-3xl mt-4'}>
          基于装饰器的MVC框架，助力构建可扩展的Web应用
        </div>
      </div>
      <div className={'flex justify-center'}>
        <div className={'mr-10'}>
          <Button label={'快速开始'}></Button>
        </div>
        <Button label={'API文档'}></Button>
      </div>
    </div>
  }
}

export default IndexPage;
