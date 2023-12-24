import React ,{useState} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import axios from "axios";
// Styled components
const BackgroundImage = styled.div`
  height: 45vh;
  background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
  background-size: cover;
  background-position: center;
`;

const CardContainer = styled.div`
  margin-top: -100px;
  width: 80%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  height: 45vh;
`;

const CardBody = styled.div`
  padding: 2rem;
  text-align: center;
  background: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: blur(30px);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  height: auto;
  min-height: 380px;
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  margin: 0.7rem;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  &::placeholder {
    font-weight: bold;
  }
`;

const SubmitButton = styled.button`
  background-color: #1266f1;
  width: 100%;
  max-width: 300px;
  color: white;
  border: none;
  font-weight: bolder;
  padding: 0.3rem; /* Adjusted padding */
  margin: 0.7rem;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 175px) {
    font-size: 10px; /* Adjust font size for smaller screens */
  }
`;

// ... (imports)

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
   console.log(process.env.REACT_APP_API);
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        name,
        email,
        password,
      });
      console.log('Signup successful:', response.data);
      window.alert("Signup Successful")
    } catch (error) {
      console.error('Signup error:', error.response.data);
    }
  };
  

  return (
    <div className="container-fluid">
      <BackgroundImage></BackgroundImage>
      <CardContainer>
        <CardBody>
          <h2>Sign Up</h2>
          {/* Use onSubmit on the form to trigger handleSignup */}
          <form onSubmit={handleSignup}>
            <FormInputs>
              <FormInput
                className='form-input'
                placeholder='Name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormInput
                className='form-input'
                placeholder='Email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                className='form-input'
                placeholder='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Use type="submit" for the button inside the form */}
              <SubmitButton className='submit-btn' type="submit">SIGN UP</SubmitButton>
            </FormInputs>
          </form>
          <NavLink to='/login' style={{ color: '#1266f1' }}>
            Already have an account? Login
          </NavLink>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default Signup;

