// import {useQuery} from "react-query";
// import React, { Component }  from 'react';

// export const AdsContainer = ({children}) => {
//   const query = useQuery('todos', () => {
//     return fetch("http://localhost:5000/alluserdata").then(response => {
//       return response.json()
//     })
//   })

  
  
//     userEffect(() => {}, [data.length])
   

//   return (
//     <Component data={query.data}>
//       {children}
//     </Component>
//   )
// }

import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';


export const UserContext = createContext({});

export function UserContextProvider({children}) {

const [user, setUsers] = useState([]);

useEffect(() => {
    
        axios.get('http://localhost:5000/alluserdata').then(({data}) => {
            setUsers(data);
        })
    
}, []);
// const getUsers = async () => {
//     const response = await axios.get("http://localhost:5000/profile", {
//         header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json' },
//     mode: "cors"
// });
//     setUser(response.data);
//   };

    return(
        
        <UserContext.Provider value={{user, setUsers}}>
            {children}
        </UserContext.Provider>


    )
}