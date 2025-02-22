import {autowired, bind, Router, view} from 'coco-mvc';
import SideMenuItem from "./side-menu-item";

@view()
class SideMenu {

  menu = [
    {
      name: 'view',
      route: '/reference/view'
    },
    {
      name: 'bind',
      route: '/reference/bind'
    },
    {
      name: 'reactive',
      route: '/reference/reactive'
    },
    {
      name: 'memoized',
      route: '/reference/memoized'
    },
  ]

  @autowired()
  private router: Router;

  @bind()
  handleClick(route: string) {
    if (this.router.pathname !== route) {
      this.router.navigateTo(route);
    }
  }

  render() {
    return <div className='p-4'>
      {this.menu.map(i => {
        return <SideMenuItem
          active={this.router.pathname === i.route}
          label={i.name}
          onClick={() => {
            this.handleClick(i.route)
          }}
        />
      })}
    </div>
  }
}

export default SideMenu;