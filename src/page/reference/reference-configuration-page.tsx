import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";

@route('/reference/configuration')
@view()
class ReferenceConfigurationPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu type={'reference'} />
        <div>
          <h1>@configuration</h1>
          <div>configuration装饰器用于装饰类，表明是一个配置类，配置类应该放在src/configuration目录下</div>
          <div>configuration和bean配合在一起才有用，用于配置第三方组件</div>
        </div>
      </div>
    </div>
  }
}

export default ReferenceConfigurationPage;
