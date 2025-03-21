import {route, view} from "coco-mvc";
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";

@route('/learn/jsx')
@view()
class LearnJsxPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>jsx</Header1>
          <div>
            同React一样，coco-mvc同样使用jsx书写标签语法，学习参见：https://zh-hans.react.dev/learn/writing-markup-with-jsx
          </div>
        </div>
      </div>
    </div>
  }
}

export default LearnJsxPage;