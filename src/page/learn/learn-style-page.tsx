import {route, view} from "coco-mvc";
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";

@route('/learn/style')
@view()
class LearnStylePage {
  render() {
    return <div className={'w-full pt-14'}>
      <HeaderBar />
      <div className={'flex flex-row'}>
        <SideMenu/>
        <div>
          <Header1>样式</Header1>
          <div>
            coco-mvc脚手架内置Tailwindcss配置，并且也推荐使用Tailwindcss，因为Tailwindcss和coco-mvc推荐的一个文件一个类的思想非常契合。Tailwindcss官网：https://tailwindcss.com/。
          </div>
          <div>
            当然用户也可以自行添加喜欢的css预处理器。
          </div>
        </div>
      </div>
    </div>
  }
}

export default LearnStylePage;