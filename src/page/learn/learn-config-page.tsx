import {route, page} from "coco-mvc";
import SideMenu from "@/view/side-menu";
import Header1 from "@/view/header-1";
import Header2 from "@/view/header-2";
import Card from "@/view/card";
import ContentLayout from "@/layout/content-layout";

@route('/learn/config')
@page()
class LearnConfigPage {
  render() {
    return <ContentLayout sideMenu={<SideMenu />}>
      <Header1>配置文件</Header1>
      <div>coco-mvc框架有两类配置文件，分别是非运行时配置和运行时配置。两者的区别：</div>
      <ul>
        <li>
          非运行时配置可以理解成构建配置；
        </li>
        <li>
          运行时配置可以理解成组件配置，一般用于实例化第三方组件时，设置组件的属性
        </li>
      </ul>
      <div>
      </div>
      <Header2>非运行时配置文件</Header2>
      非运行时配置，放在config文件夹下，包括开发配置、构建配置等等，例如webpack配置、打包目录等等。
      <div>默认配置文件名为config.json。目前支持的配置如下：</div>
      <ul>
        <li><span className={'text-blue-600'}>webpack</span>自定义webpack，最终会通过webpack-merge和默认的配置合并。</li>
      </ul>
      <Header2>运行时配置文件</Header2>
      运行时配置，放在properties文件夹下，是指在运行时组件可以使用@value装饰器获取的配置。
      <div>默认配置文件名是application.json。</div>
      <Header1>环境变量</Header1>
      两个配置类型都支持通过在启动命令中添加NODE_ENV，支持额外加载特定的配置文件。
      例如当指定NODE_ENV="test"时，会额外加载config.test.json和application.test.json文件。
      <Card>
        额外加载的意思是：合并config.xxx.json和config.json两个文件的配置。
        同名属性使用覆盖逻辑：
        <ul>
          <li>如果同名配置的值是不同的类型，则直接使用config.xxx.json中的值；</li>
          <li>如果值是数组，则直接使用config.xxx.json中的值；</li>
          <li>如果值是对象，则对象中的每个属性继续同样的合并逻辑</li>
        </ul>
      </Card>
      <Card>
        默认coco dev命令会额外加载config.dev.json和application.dev.json文件，不需要指定NODE_ENV，也可以通过设置NODE_ENV强制使用其他的配置文件
      </Card>
      <Card>
        默认coco build命令会额外加载config.prod.json和application.prod.json文件，不需要指定NODE_ENV，，也可以通过设置NODE_ENV强制使用其他的配置文件
      </Card>
    </ContentLayout>
  }
}

export default LearnConfigPage;