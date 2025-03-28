import {route, view} from "coco-mvc";
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Header2 from "../../view/header-2";
import Code from "../../view/code";
import Card from "../../view/card";

@route('/learn/overview')
@view()
class LearnOverviewPage {
  code = `
// 使用类装饰器申明一个按钮组件
@view()  
class Button () {
  render() {
    return <button>登录</button>
  }
}
  `
  code1 = `
@view()  
class Button () {
  
  @autowired()
  loginControler: LoginController;
  
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
  localStorageService: LocalStorageService;
  
  login() {
    try {
      // 处理多个服务层的逻辑，但不关心具体实现
      const { token } = this.loginService.login();
      this.localStorageService.set('token', token);
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
@service()  
class LocalStorageService {
  set(key, value) {
    localStorage.setItem(key, value);
  }
}
  `

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        <SideMenu type={'learn'}/>
        <div>
          <Header1>总览</Header1>
          <Header2>什么是coco-mvc？</Header2>
          <div>coco-mvc（coco是coconut的缩写）是一个Web框架，帮助开发者构建可扩展的Web应用。主要特性：</div>
          <ul>
            <li>装饰器</li>
            <li>MVC</li>
            <li>约定大于配置</li>
          </ul>
          <Header2>装饰器</Header2>
          装饰器是一种设计模式，允许开发者在不改变代码结构的前提下扩展类的功能。
          <div>一个简单的例子：</div>
          <Code code={this.code} />
          Button是一个普通的类，这里添加了view装饰器，表示Button就是一个用于描述页面的视图类组件。
          <Card>
            熟悉React的同学会发现：这是类组件吧？确实如此，因为装饰器是基于类的，尽量和React的类组件保持一致可以减少学习成本。
          </Card>
          目前es中装饰器处于stage-3阶段，coco-mvc集成了babel插件，开箱即用。学习es装饰器：https://github.com/tc39/proposal-decorators
          <Header2>MVC</Header2>
          <div>MVC（Model-View-Controller）是一种设计模式，它将应用程序分成不同的层，每一层负责不同的任务。</div>
          <div>一个例子：用户点击登录按钮&nbsp;-&gt;&nbsp;发送网络请求&nbsp;-&gt;&nbsp;页面跳转的例子，代码大体如下：</div>
          视图层：
          <Code code={this.code1} />
          控制层：
          <Code code={this.code2} />
          服务层：
          <Code code={this.code3} />
          <Code code={this.code4} />
          <div>通过将一段业务划分为“视图-控制-服务”三层，每一层都专注自己的职责范围，有利于代码的可模块化和可维护化。</div>
          <table>
            <thead>
            <tr>
              <th>层</th>
              <th>职责范围</th>
              <th>非职责范围</th>
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
              <td>1.为视图层提供接口；2.业务流程及流转控制</td>
              <td>1.UI；2.业务具体实现</td>
            </tr>
            <tr>
              <td>服务层</td>
              <td>1.为控制层提供接口；2.本服务具体实现</td>
              <td>1.UI；2.业务流程</td>
            </tr>
            </tbody>
          </table>
          <Header2>约定大于配置</Header2>
          <div>约定大于配置是一种软件设计范式，旨在减少开发人员要做的决定的次数，降低学习和沟通成本。</div>
          <div>coco-mvc要求一些类装饰器都放在特定的文件夹下，还有配置文件夹等，具体见&nbsp;目录结构&nbsp;页面。</div>
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
        </div>
      </div>
    </div>
  }
}

export default LearnOverviewPage;