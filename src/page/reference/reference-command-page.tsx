import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Code from "../../view/code";

@route('/reference/command')
@view()
class ReferenceCommandPage {

  code = `
npx @cocojs/cli create
`
  code1 = `
coco build  
`;
  code2 = `
coco dev  
`;
  code3 = `
npx @cocojs/cli create lib
`;
  code4 = `
coco build lib
`;

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu type={'reference'} />
        <div>
          <Header1>命令行</Header1>
          <div>框架提供的cli工具，内置了一些命令，可用于项目创建、开发、和构建。</div>
          <Header2>create</Header2>
          在当前目录下创建一个Web应用
          <Code code={this.code} />
          <Header2>build</Header2>
          打包Web应用
          <Code code={this.code1} />
          <Header2>dev</Header2>
          本地开发
          <Code code={this.code2} />
          <Header2>create lib</Header2>
          在当前目录下创建一个组件库
          <Code code={this.code3} />
          <Header2>build lib</Header2>
          构建一个组件库
          <Code code={this.code4} />
        </div>
      </div>
    </div>
  }
}

export default ReferenceCommandPage;
