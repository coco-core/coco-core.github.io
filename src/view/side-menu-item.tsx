import {view} from 'coco-mvc';

@view()
class SideMenuItem {
  props: {
    label: string;
    active: boolean;
    onClick: () => void;
  }

  render() {
    return <div
      className={`h-[30px] leading-[30px] ${this.props.active ? 'text-primary': 'cursor-pointer'}`}
      onClick={this.props.onClick}
    >
      {this.props.label}
    </div>
  }
}

export default SideMenuItem;