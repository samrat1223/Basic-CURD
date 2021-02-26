import React,{useState,Fragment}  from 'react';
import AddUserForm from './forms/AddUserForm';
import UserTables from './tables/UserTables';
import EditUserForm from './forms/EditUserForm.js';

const App = () => {

  const usersData =[
    /*{id:1 ,name:'Sam',username: 'family'},
    {id:2 ,name:'Rahim',username: 'fort'},
    {id:1 ,name:'Park',username: 'fish'},*/
  ]

  const initialFormState= {id:null,name: '',username:''}
  const[users,setUsers]= useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const[editing,setEditing]=useState(false);


  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users,user])
  }

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user)=>user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }

  const updateUser = (id,updateUser) => {
    setEditing(false)

    setUsers(users.map((user)=>(user.id=== id ? updateUser : user)))
  }

  /*const updateBook = (book) => {
    setBook({title:book.title,available:book.available})
  }*/



  return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTables users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
  )
}

export default App
