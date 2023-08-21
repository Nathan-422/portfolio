import { useState } from 'react';
import Button from '../button/Button';

export interface IGuessingGameProps {
}

export function GuessingGame (props: IGuessingGameProps) {

    const [clicked, setClicked] = useState(false);
    const [gameEnded, setGameActive] = useState(true);

    function handleClick() {
        setClicked(true);
        setGameActive(false)
    }

    function handleReset() {
        setClicked(false);
        setGameActive(true);
    }

  return (
    <>
        <div>
            <Button clicked={clicked} handleClick={handleClick} buttonText='Chose me?'></Button>
            <Button clicked={clicked} handleClick={handleClick} buttonText='Or me?'></Button>
            <Button clicked={gameEnded} handleClick={handleReset} buttonText='Reset'></Button>
        </div>
    </>
  );
}
