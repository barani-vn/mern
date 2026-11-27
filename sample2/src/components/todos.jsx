import { useEffect, useState } from "react";

function Todos() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Error fetching todo data:", error));
    }, []);

    return(
        <div>
            <h1>Todos</h1>
               {/* {userData.map(todo=>(   */}
               {/* this will display all the todos, but we want to display only 20 todos, so we will use slice method */}
                {userData.slice(0,20).map(todo=>( 
               <p key={todo.id}>{todo.id}: {todo.title}: {todo.completed ? "Completed" : "Pending"}</p>
              ))}
        </div>
    );
}

export default Todos;