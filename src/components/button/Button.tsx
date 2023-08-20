export interface IButtonProps {
    clicked: boolean;
    handleClick: () => void;
}

export default function Button (props: IButtonProps) {
  return <>
    <button className="mx-4 bg-cyan-600 border-2 border-cyan-900 text-white p-2 rounded-md" disabled={props.clicked} onClick={props.handleClick}>Click me</button>
    </>
}
