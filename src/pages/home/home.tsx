import { useState } from "react"
import Button from "../../components/button/Button";

const items = [
    {body: 'First item', id: 1},
    {body: 'Second item', id: 2},
    {body: 'Third item', id: 3},
]

const listItems = items.map(item => 
    <li 
    key={item.id}
    style={{
        color: item.id == 2 ? 'magenta' : 'black'
    }}
    >
        {item.body}
    </li>
)


export default function HomePage() {
    const [clicked, setClicked] = useState(false);
    
    function handleClick() {
        setClicked(true);
        alert('Clicked a button!')
    }

    return <>
        <div>
            <h1>Home page content</h1>
            <ul className="mx-6">{listItems}</ul>
            <Button clicked={clicked} handleClick={handleClick} />
            <h1>End home page content</h1>
        </div>
    </>
}
