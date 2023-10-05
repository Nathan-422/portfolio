export interface IButtonProps {
  buttonText?: string
  clicked: boolean
  handleClick: () => void
}

const activeBtn = 'bg-cyan-600 border-cyan-900 text-white'
const disabledBtn = 'bg-gray-200 border-gray-300 text-gray-400'

export function Button(props: IButtonProps) {
  // I haven't finished this. I need to build an optional basically.
  let buttonText: string = "I'm a string!"

  props?.buttonText ? (buttonText = props.buttonText) : (buttonText = 'Click me!')

  return (
    <>
      <button
        className={
          'mx-4 rounded-md border-2 p-2 ' + (props.clicked ? disabledBtn : activeBtn)
        }
        disabled={props.clicked}
        onClick={props.handleClick}
      >
        {buttonText}
      </button>
    </>
  )
}
