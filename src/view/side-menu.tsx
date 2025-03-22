import {autowired, bind, Router, view} from 'coco-mvc';
import SideMenuItem from "./side-menu-item";

@view()
class SideMenu {
  props: {
    type: 'reference' | 'learn'
  } = { type: 'reference' }

  learnMenu = [
    {
      name: '总览',
      route: '/learn/overview',
    },
    {
      name: '创建项目',
      route: '/learn/create-project',
    },
    {
      name: '目录结构',
      route: '/learn/directory-structure',
    },
  ]

  referenceMenu = [
    {
      name: '总览',
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
      {(this.props.type === 'reference' ? this.referenceMenu : this.learnMenu).map(i => {
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