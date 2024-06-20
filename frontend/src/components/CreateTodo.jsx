
export function CreateTodo()
{
    return <div>
        <input style={{
            padding:10,
            margin:10,
        }}type="text" placeholder="title"></input><br/>
        <input  style={{
            padding:10,
            margin:10,
        }}type="text" placeholder="description"></input><br/>

        <button>Add a todo</button>
    </div>
}