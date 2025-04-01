import {route, page} from "coco-mvc";
import SideMenu from "@/view/side-menu";
import Header1 from "@/view/header-1";
import Header2 from "@/view/header-2";
import Code from "@/view/code";
import ContentLayout from "@/layout/content-layout";

@route('/learn/overview')
@page()
class LearnOverviewPage {
  code = `
// 使用装饰器申明一个按钮组件
@view()  
class Button () {
  render() {
    return <button>登录</button>
  }
}
  `;
  code1 = `
@view()  
class Button () {
  
  @autowired()
  loginControler: LoginController;
  
  @bind()
  clickLogin() {
    // 调用控制层登录接口，不关心具体实现
    const success = this.loginControler.login();
    if (success) {
      history.pushState({}, '', '/index');
    } else {
      alert("登录失败")
    }
  }
  
  render() {
    return <button onClick={this.clickLogin}>登录</button>
  }
}
`;

  code2 = `
@controller()  
class LoginController {
  @autowired()
  loginService: LoginService;

  @autowired()
  localStorage: LocalStorage;
  
  login() {
    try {
      // 处理多个服务层的逻辑，但不关心具体实现
      const { token } = this.loginService.login();
      this.localStorage.set('token', token);
      return true;
    } catch (e) {
      return false
    }
  }
}
`

  code3 = `
@service()  
class LoginService {
  login() {
    return axios.post('/login')
  }
}
`
  code4 = `
@component()  
class LocalStorage {
  set(key, value) {
    localStorage.setItem(key, value);
  }
}
  `

  render() {
    return <ContentLayout sideMenu={<SideMenu />}>
      <Header1>总览</Header1>
      <Header2>什么是coco-mvc？</Header2>
      <div>coco-mvc（coco是coconut的缩写）是一个Web框架，帮助开发者构建可扩展的Web应用。主要特性：</div>
      <div className={'flex flex-col justify-between leading-30 text-3xl text-amber-800 font-bold'}>
        <div>
          1. 装饰器
        </div>
        <div>
          2. MVC
        </div>
        <div>
          3. 约定大于配置
        </div>
      </div>
      <Header2>装饰器</Header2>
      装饰器是一种设计模式，允许开发者在不改变代码结构的前提下扩展类的功能。
      <div>一个简单的例子：</div>
      <Code code={this.code} />
      Button是一个普通的类，这里添加了view装饰器，表示Button就是一个用于描述页面的视图类组件。
      目前es中装饰器处于stage-3阶段，因为coco-mvc集成了babel插件，开箱即用。深入学习es装饰器：https://github.com/tc39/proposal-decorators
      <Header2>MVC</Header2>
      <div>MVC（Model-View-Controller）是一种设计模式，它将应用程序分成不同的层，每一层负责不同的任务。</div>
      <div>一个例子：用户点击登录按钮&nbsp;-&gt;&nbsp;发送网络请求&nbsp;-&gt;&nbsp;页面跳转的例子，代码大体如下：</div>
      视图层：
      <Code code={this.code1} />
      控制层：
      <Code code={this.code2} />
      服务层：
      <Code code={this.code3} />
      工具层：
      <Code code={this.code4} />
      <div>通过将一段业务划分为“视图-控制-服务”三层，每一层都专注自己的职责范围，有利于代码的模块化，提高可维护性。</div>
      <table>
        <thead>
        <tr>
          <th>层</th>
          <th>关注</th>
          <th>不关注</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>视图层</td>
          <td>1.UI渲染和交互</td>
          <td>2.业务具体实现</td>
        </tr>
        <tr>
          <td>控制层</td>
          <td>1.为视图层提供接口；2.业务流转控制</td>
          <td>1.UI；2.业务具体实现</td>
        </tr>
        <tr>
          <td>服务层</td>
          <td>1.为控制层提供接口；2.服务具体实现</td>
          <td>1.UI；2.业务流程</td>
        </tr>
        </tbody>
      </table>
      <Header2>约定大于配置</Header2>
      <div>约定大于配置是一种软件设计范式，旨在减少开发人员要做的决定的次数，降低学习和沟通成本。</div>
      <div>coco-mvc规定了常用类的存放位置，具体见&nbsp;目录结构&nbsp;页面。</div>
      <Header2>其他特性</Header2>
      <ul>
        <li>
          <span className={'text-blue-600'}>TypeScript支持</span>
          TypeScript提供了良好的静态类型校验能力和提醒功能，且coco-mvc依赖TypeScript的transformer能力，所以coco-mvc项目全部使用Ts编写。Ts官网：https://www.typescriptlang.org/
        </li>
        <li>
          <span className={'text-blue-600'}>JSX</span>
          同React一样，coco-mvc同样使用JSX书写标签语法，学习参见：https://zh-hans.react.dev/learn/writing-markup-with-jsx
        </li>
        <li>
          <span className={'text-blue-600'}>Tailwindcss</span>
          框架已经内置Tailwindcss，因为Tailwindcss和coco-mvc推荐的一个文件一个类的思想非常契合。Tailwindcss官网：https://tailwindcss.com/
        </li>
      </ul>
    </ContentLayout>
  }
}

export default LearnOverviewPage;