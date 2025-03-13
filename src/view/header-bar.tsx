import { view } from 'coco-mvc';

@view()
class HeaderBar {

  handleClick() {
    window.open('https://github.com/coco-core/coconut-framework');
  }

  render() {
    return <div
      className={'fixed flex flex-row justify-between items-center top-0 left-0 w-full px-8 h-14 border-b bg-white border-gray-200'}>
      <div>
        v0.0.1-alpha
        <span className={'font-bold text-amber-800'}>（内部预览版，请不要用于生产环境！)</span>
      </div>
      <div className={'cursor-pointer'} onClick={this.handleClick}>github</div>
    </div>
  }
}

export default HeaderBar;