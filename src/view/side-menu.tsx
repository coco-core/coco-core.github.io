import {autowired, bind, Router, view} from 'coco-mvc';
import SideMenuItem from "./side-menu-item";

@view()
class SideMenu {

  menu = [
    {
      name: 'overview',
      route: '/reference/overview',
    },
    {
      name: 'view',
      route: '/reference/view'
    },
    {
      name: 'controller',
      route: '/reference/controller'
    },
    {
      name: 'service',
      route: '/reference/service'
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
    {
      name: 'ref',
      route: '/reference/ref'
    },
    {
      name: 'component',
      route: '/reference/component'
    },
    {
      name: 'route',
      route: '/reference/route'
    },
    {
      name: 'store',
      route: '/reference/store'
    },
    {
      name: 'reactiveAutowired',
      route: '/reference/reactive-autowired'
    },
    {
      name: 'target',
      route: '/reference/target'
    },
    {
      name: 'webApplication',
      route: '/reference/webApplication'
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