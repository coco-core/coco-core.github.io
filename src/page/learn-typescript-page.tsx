import {route, view} from "coco-mvc";
import HeaderBar from "../view/header-bar";
import SideMenu from "../view/side-menu";
import Header1 from "../view/header-1";

@route('/learn/typescript')
@view()
class LearnTypeScriptPage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>TypeScript</Header1>
          <div>
            TypeScript提供了良好的静态类型校验能力和提醒功能，同时coco-mvc部分功能依赖Ts的transformer能力，所以coco-mvc项目全部使用Ts编写。Ts官网：https://www.typescriptlang.org/
          </div>
        </div>
      </div>
    </div>
  }
}

export default LearnTypeScriptPage;