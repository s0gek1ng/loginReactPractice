import React,{ useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [usernameReg,setUsernameReg] = useState("");
  const [passwordReg,setPasswordReg] = useState("");
  const [firstName,setfirstName] = useState("");
  const [lastName,setlastName] = useState("");
  const [mobileno,setmobileno] = useState("");
  // const [type,settype] = useState("");


  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const register=()=>{
    Axios.post('http://localhost:3001/register',{
      email: usernameReg,
      password: passwordReg,
      fname:  firstName,
      lname:  lastName,
      mobileno: mobileno,
      // type: type,
    }).then((response)=>{
      console.log(response);
    })
  }

  const [loginStatus,setLoginStatus]=useState("");

  const login=()=>{
    Axios.post('http://localhost:3001/login',{
      email: username,
      password: password,
    }).then((response)=>{
      // console.log(response);
      if(response.data.message)
        setLoginStatus(response.data.message);
      else
        setLoginStatus(response.data[0].fname);
    });
  };

  return (
    <div className="App">
      <div className="signUp">
        <h1>Sign Up</h1>
        <label>First Name:  </label>
        <input type="text" onChange={(e)=>{
          setfirstName(e.target.value)
        }}/>
        <p/>
        <label>Last Name: </label>
        <input type="text" onChange={(e)=>{
          setlastName(e.target.value)
        }}/>
        <p/>
        <label>Email ID:  </label>
        <input type="text" onChange={(e)=>{
          setUsernameReg(e.target.value)
        }}/>
        <p/>
        <label>Mobile Number: </label>
        <input type="text" onChange={(e)=>{
          setmobileno(e.target.value)
        }}/>
        <p/>
        <label>Password:  </label>
        <input type="password" onChange={(e)=>{
          setPasswordReg(e.target.value)
        }}/>
        <p/>
        <button onClick={register}>Sign Up</button>
        
      </div>
      <div className="login">
        <h1>Login</h1>
          <label>Username:</label>
          <input type="text" onChange={(e)=>{
            setUsername(e.target.value)
          }}/>
          <p/>
          <label>Password:</label>
          <input type="password" onChange={(e)=>{
            setPassword(e.target.value)
          }}/>

          <button onClick={login}>Login</button>
      </div>
      <p/>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
