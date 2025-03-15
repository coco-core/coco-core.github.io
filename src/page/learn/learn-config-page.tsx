import {route, view} from "coco-mvc";
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Card from "../../view/card";

@route('/learn/config')
@view()
class LearnConfigPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>配置文件</Header1>
          coco-mvc框架有两类配置文件，分别是非运行时配置和运行时配置，分别放在config和properties文件夹下。
          <Header2>非运行时配置</Header2>
          非运行时配置，包括开发配置、构建配置等等，例如webpack配置、打包目录等等。
          <div>默认配置文件名为config.json。</div>
          <ul>
            <li></li>
          </ul>
          <Header2>运行时配置</Header2>
          运行时配置，是指供ioc组件在运行时通过@value获取的配置。
          <div>默认配置文件名是application.json。</div>
          <Header1>环境变量</Header1>
          通过在启动命令中添加NODE_ENV，支持额外加载特定的配置文件，两种配置都支持。
          例如当指定NODE_ENV="dev"时，会额外加载config.dev.json和application.dev.json文件。
          <Card>
            额外加载的意思是：合并config.xxx.json和config.json两个文件的配置。
            同名属性使用覆盖逻辑：
            <ul>
              <li>如果同名配置的值是不同的类型，则直接使用config.xxx.json中的值；</li>
              <li>如果值是数组，则直接使用config.xxx.json中的值；</li>
              <li>如果值是对象，则对象中的每个属性继续同样的合并逻辑</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  }
}

export default LearnConfigPage;