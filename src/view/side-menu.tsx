import { view } from 'coco-mvc';

@view()
class SideMenu {
  @view()
  h() {
    return <div>side bar</div>
  }
}

export default SideMenu;