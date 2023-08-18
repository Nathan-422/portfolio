export default function HomePage() {
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
        </li>)

    return <>
        <div>
            <h1>Home page content</h1>
            <ul className="mx-6">{listItems}</ul>
            <h1>End home page content</h1>
        </div>
    </>
}
