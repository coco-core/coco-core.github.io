import {view} from 'coco-mvc';

@view()
class SideMenuItem {
  props: {
    label: string;
    active: boolean;
    onClick: () => void;
  }

  @view()
  render() {
    return <div className={this.props.active ? 'text-amber-800 h-[30px] leading-[30px]' : 'cursor-pointer h-[30px] leading-[30px]'}
                onClick={this.props.onClick}
    >
      {this.props.label}
    </div>
  }
}

export default SideMenuItem;