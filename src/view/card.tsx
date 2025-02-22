import { view } from 'coco-mvc';

@view()
class Card {
  props: {
    children: string;
  }

  render() {
    return <div
      className={'p-3 rounded-md bg-amber-100'}
    >
      {this.props.children}
    </div>
  }
}

export default Card;