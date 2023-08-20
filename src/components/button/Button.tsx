export interface IButtonProps {
    clicked: boolean;
    handleClick: () => void;
}

const activeBtn = "bg-cyan-600 border-cyan-900 text-white";
const disabledBtn = "bg-gray-200 border-gray-300 text-gray-400"


export default function Button (props: IButtonProps) {
  return <>
    <button className={"mx-4 p-2 border-2 rounded-md " + (props.clicked ? disabledBtn : activeBtn)} disabled={props.clicked} onClick={props.handleClick}>Click me</button>
    </>
}
