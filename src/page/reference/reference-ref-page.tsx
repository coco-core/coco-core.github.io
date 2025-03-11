import { view, route } from 'coco-mvc';
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header2 from "../../view/header-2";
import Code from "../../view/code";
import Header1 from "../../view/header-1";

@route('/reference/ref')
@view()
class ReferenceRefPage {
  code = `
class A {
  @ref()
  input: { current: HtmlElement }
  
  render () {
    return <input ref={this.input} />
  }
}
  `;

  code1 = `
class B {
  @reactive()
  list = [1, 2]
  
  @refs()
  input: Record<number, HtmlElement>

  render () {
    return <div>
      {
        this.list.map((item, idx) => (
          <input ref={(elm) => this.input[idx] = elm} />
        ))
      }
    </div>
  }
}
  `;

  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar/>
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>@ref</Header1>
          <Header2>装饰field</Header2>
          <div>使用@ref引用单个dom元素或者子组件</div>
          <Code code={this.code} />
          <div>使用@refs引用多个dom元素或者子组件</div>
          <Code code={this.code1} />
        </div>
      </div>
    </div>
  }
}

export default ReferenceRefPage;
