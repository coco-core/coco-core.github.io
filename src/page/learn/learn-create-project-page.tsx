import {route, view} from "coco-mvc";
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Code from "../../view/code";

@route('/learn/create-project')
@view()
class LearnCreateProjectPage {
  code = `
npx @cocojs/cli create 
项目名称？...
  `

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>创建项目</Header1>
          <Header2>环境准备</Header2>
          <div>首先本地需要node环境，推荐node18lts及以上，官网：https://nodejs.org/zh-cn/download。</div>
          <Header2>创建项目</Header2>
          使用脚手架的create命令快速创建一个项目
          <Code code={this.code} />
          <div>输入要创建项目的名称，脚手架会在当前目录下创建项目目录。常用命令如下：</div>
          <ul>
            <li>
              npm install: 安装依赖
            </li>
            <li>
              npm run dev: 本地开发，地址是http://localhost:9700
            </li>
            <li>
              npm run build: 构建生产包
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
}

export default LearnCreateProjectPage;