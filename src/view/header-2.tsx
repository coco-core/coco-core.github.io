import {view} from 'coco-mvc';

@view()
class Header2 {
  props: {
    label: string;
    children: string;
  }

  @view()
  render() {
    return <div className={'text-3xl font-bold leading-normal'}>
      {this.props.children}
    </div>
  }
}

export default Header2;
