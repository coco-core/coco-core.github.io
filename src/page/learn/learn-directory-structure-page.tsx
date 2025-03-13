import {route, view} from "coco-mvc";
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Code from "../../view/code";

@route('/learn/directory-structure')
@view()
class LearnDirectoryStructurePage {
  code = `
root
 |-- config // 非运行时配置根目录
 |-- properties  // 运行时配置文件根目录
 |
 |-- src
 |   |
 |   |-- .coco // 运行时文件夹(由框架生成)
 |   |
 |   |-- page // 页面组件根目录
 |   |    |-- login-page.tsx
 |   |    
 |   |-- view  // 非页面视图组件默认根目录
 |   |    |-- layout.tsx
 |   |    
 |   |-- controller // 控制类组件根目录
 |   |    |-- user-controller.ts
 |   |    
 |   |-- service // 服务类组件根目录
 |   |    |-- user-service.ts
 |   |    
 |   |-- configuration //     
 |   |    
 |   |-- component // 其他组件根目录
 |   |    
 |   |-- application.ts // 启动入口文件
 |
 |-- packages.json
 |-- tsconfig.json
 |-- webpack.config.js
 |-- postcss.config.js
 |-- babel.config.js
`

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>目录结构</Header1>
          <div>coco-mvc项目大部分的目录都是固定的，这有助于减少沟通成本，具体如下：</div>
          <Code code={this.code} />
        </div>
      </div>
    </div>
  }
}

export default LearnDirectoryStructurePage;