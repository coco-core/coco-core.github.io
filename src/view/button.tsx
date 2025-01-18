import { view } from 'coco-mvc';

@view()
class Button {
  @view()
  h() {
    return <div
      className={'inline-flex justify-center items-center h-10 px-8 rounded-md cursor-pointer text-white bg-amber-800'}
      onClick={this.props.onClick}
    >
      {this.props.label}
    </div>
  }
}

export default Button;