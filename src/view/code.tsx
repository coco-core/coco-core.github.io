import { view } from 'coco-mvc';

@view()
class Code {
  props: {
    code: string;
  }

  render() {
    return <div
      className={'p-3 rounded-md bg-black text-white whitespace-pre'}
    >
      {this.props.code.trim()}
    </div>
  }
}

export default Code;