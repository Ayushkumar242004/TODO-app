export function Todos({todos})
{

    return <div>
       {todos.map(function(todo){
        return <div style={{border:'2px solid #00ED64', margin:'10px',backgroundColor:'#00ED64',borderRadius:'4px'}}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed==true ? "Completed":"Completed"}</button>
        </div>
       })}
    </div>
}