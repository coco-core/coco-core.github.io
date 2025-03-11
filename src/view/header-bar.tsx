import { view } from 'coco-mvc';

@view()
class HeaderBar {

  handleClick() {
    window.open('https://github.com/coco-core/coconut-framework');
  }

  render() {
    return <div
      className={'fixed flex flex-row justify-between items-center top-0 left-0 w-full px-8 h-14 border-b border-gray-200'}>
      v0.0.1-alpha
      <div className={'cursor-pointer'} onClick={this.handleClick}>github</div>
    </div>
  }
}

export default HeaderBar;