import {autowired, bind, Router, view} from 'coco-mvc';

@view()
class HeaderBar {
  @autowired()
  private router: Router;

  clickGithub() {
    window.open('https://github.com/coco-core/coconut-framework');
  }

  @bind()
  clickReference() {
    this.router.navigateTo('/reference/overview');
  }

  @bind()
  clickLearn() {
    this.router.navigateTo('/learn/overview');
  }

  @bind()
  clickVersion() {
    this.router.navigateTo("/")
  }

  render() {
    return <div
      className={'fixed flex flex-row justify-between items-center top-0 left-0 w-full px-8 h-14 border-b bg-white border-gray-200'}>
      <div className={'cursor-pointer'} onClick={this.clickVersion}>
        <span>v0.0.1-alpha202504192155</span>
        <div className={'font-bold text-primary'}>目前处于内部预览版，请不要用于生产环境</div>
      </div>
      <div className={'flex justify-center'}>
        <div className={'mx-2 cursor-pointer'} onClick={this.clickLearn}>教程</div>
        <div className={'mx-2 cursor-pointer'} onClick={this.clickReference}>参考</div>
        <div className={'mx-2 cursor-pointer'} onClick={this.clickGithub}>github</div>
      </div>
    </div>
  }
}

export default HeaderBar;