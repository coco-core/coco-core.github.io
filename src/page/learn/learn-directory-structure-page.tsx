import {route, page} from "coco-mvc";
import SideMenu from "@/view/side-menu";
import { Header1, Code } from "cocojs-component-demo";
import ContentLayout from "@/layout/content-layout";

@route('/learn/directory-structure')
@page()
class LearnDirectoryStructurePage {
  code = `
root
 |-- config // 非运行时配置根目录
 |-- properties  // 运行时配置根目录
 |
 |-- src
 |   |
 |   |-- .coco // 运行时文件夹(由框架生成)
 |   |
 |   |-- layout // 布局类组件根目录
 |   |    |-- xxx.tsx
 |   |
 |   |-- page // 页面组件根目录
 |   |    |-- login-page.tsx
 |   |    
 |   |-- view  // 一般视图组件根目录
 |   |    |-- xxx.tsx
 |   |    
 |   |-- controller // 控制类组件根目录
 |   |    |-- user-controller.ts
 |   |    
 |   |-- api // 接口类组件根目录
 |   |    |-- user-api.ts
 |   |    
 |   |-- component // 其他组件根目录
 |   |    
 |   |-- application.ts // 启动入口文件
 |
 |-- packages.json
 |-- tsconfig.json
 |-- tailwind.config.js
 |-- .gitignore
`

  render() {
    return <ContentLayout sideMenu={<SideMenu />}>
      <Header1>目录结构</Header1>
      <div>coco-mvc项目大部分的目录都是固定的，这有助于减少沟通成本，具体如下：</div>
      <Code code={this.code} />
    </ContentLayout>
  }
}

export default LearnDirectoryStructurePage;