import {view} from 'coco-mvc';

@view()
class Header2 {
  props: {
    children: string;
  }

  render() {
    return <div className={'text-3xl font-bold leading-normal'}>
      {this.props.children}
    </div>
  }
}

export default Header2;
