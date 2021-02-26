import React,{useState}  from 'react';
import AddUserForm from './forms/AddUserForm';
import UserTables from './tables/UserTables';

const App = () => {

  const usersData =[
    {id:1 ,name:'Sam',username: 'family'},
    {id:2 ,name:'Rahim',username: 'fort'},
    {id:1 ,name:'Park',username: 'fish'},
  ]

  const initialFormState= {id:null,name: '',username:''}
  const[users,setUsers]= useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users,user])
  }

  

  /*const updateBook = (book) => {
    setBook({title:book.title,available:book.available})
  }*/



  return(
    <div className="container">
      <h1>CURD App with React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTables users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App
