import axios from "axios";

function StudentCard(){
    //Adding a student using axios post method
    function addUser(){
        axios.post("https://jsonplaceholder.typicode.com/users",{
            name:"Thanvi",
            email:"thanvi@gmail.com"
        })
        .then(response=>console.log("Added:",response.data))
        .catch(error=>console.log(error));
    }
    //Fetching a student using axios get method
    function getUser(){
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(response=>console.log("User:",response.data))
        .catch(error=>console.log(error));
    }
    //Updating a student using axios put method
    function updateUser(){
        axios.put("https://jsonplaceholder.typicode.com/users/1",{
            name:" updated Thanvi",
            email:"updated_thanvi@gmail.com"
        })
        .then(response=>console.log("Updated:",response.data))
        .catch(error=>console.log(error));
    }
    //Deleting a student using axios delete method
    function deleteUser(){
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then(response=>console.log("Deleted:",response.data))
        .catch(error=>console.log(error));
    }
    return(
        <div>
            <h1>Student CRUD</h1>
            <button onClick={addUser}>Add User</button>
            <button onClick={getUser}>Get User</button>
            <button onClick={updateUser}>Update User</button>
            <button onClick={deleteUser}>Delete User</button>
        </div>
    )

}

export default StudentCard;