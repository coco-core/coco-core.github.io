import {route, view} from "coco-mvc";
import HeaderBar from "../../view/header-bar";
import SideMenu from "../../view/side-menu";
import Header1 from "../../view/header-1";
import Card from "../../view/card";

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
            框架已经内置Tailwindcss，因为Tailwindcss和coco-mvc推荐的一个文件一个类的思想非常契合。Tailwindcss官网：https://tailwindcss.com/。
          </div>
          <Card>
            目前Tailwindcss是和脚手架绑定的，后续再配置成可选。
          </Card>
        </div>
      </div>
    </div>
  }
}

export default LearnStylePage;