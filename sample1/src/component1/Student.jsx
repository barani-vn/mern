function Student({name,age,gender}){
    return(
       /* <div>
            <h1>Name:John Doe</h1>
            <h1>Age:20</h1>
        </div>*/

        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Gender: {gender} </h1>
        </div>
    )
}
export default Student;