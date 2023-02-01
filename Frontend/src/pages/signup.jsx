import { useState } from 'react';
import { StyledSignUpPage } from "../styles/signUpPage.styled"; 
import axios from "axios"
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/users/signup", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstname, lastname }),
      })
     console.log(res)
    } catch (error) {
      console.log(error)
    }
     
  }
  return (
    <StyledSignUpPage>
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <p>Join Flash, It's quick and easy😁.</p>
      <div className='firstname-field field'>
      <label>Firstname:</label>
      <input
        type="text"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
          />
        </div>
      <div className='lastname-field field'>
        <label>Lastname:</label>
        <input
          type="text"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
      </div>
      <div className='email-field field'>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='password-field field'>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        </div>
        <button className='signup-btn'>SignUp</button>
        <p>Already have an account?<a href="">SignIn</a></p>
      </form>
    </StyledSignUpPage>
  );
}
export default Signup;
