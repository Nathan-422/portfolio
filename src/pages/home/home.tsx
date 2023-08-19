import { useState } from "react"

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


function MyButton() {
    
    function handleClick() {
        setClicked(true);
        alert('Clicked a button!')
    }
    
    const [clicked, setClicked] = useState(false);

    return <>
    <button className="mx-4 bg-cyan-600 border-2 border-cyan-900 text-white p-2 rounded-md" disabled={clicked} onClick={handleClick}>Click me</button>
    </>
}

export default function HomePage() {
    return <>
        <div>
            <h1>Home page content</h1>
            <ul className="mx-6">{listItems}</ul>
            <MyButton />
            <h1>End home page content</h1>
        </div>
    </>
}
