// import { useEffect, useState } from "react";

// function User() {
//     const [userData, setUserData] = useState([]);
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => setUserData(data))
//             .catch((error) => console.error("Error fetching user data:", error));
//     }, []);

//     return(
//         <div>
//             <h1>User</h1>
//                {userData.map(user=>(
//                 <p key={user.id}>{user.name}</p>
//               ))}
//         </div>
//     );
// }

// export default User;

//here we are going to use axios to fetch the data from the api, so we need to install axios first, so run the command npm install axios in the terminal, then we can use axios to fetch the data from the api.

import { useEffect, useState } from "react";
import axios from "axios";
function User() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUserData(response.data))
            .catch((error) => console.error("Error fetching user data:", error));
    }, []);

          
    return(
        <div>
            <h1>User</h1>
               {userData.map(user=>(
                <p key={user.id}>{user.name}</p>
              ))}
        </div>
    );
}

export default User;