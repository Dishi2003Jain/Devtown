import React , {useState} from 'react';
import styled from 'styled-components';
import { NavLink ,  useNavigate } from 'react-router-dom'; // Assuming the NavLink is used for routing
import axios from "axios";
import toast from "react-hot-toast";
// Styled components
const BackgroundImage = styled.div`
  height: 45vh;
  background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
  background-size: cover;
  background-position: center;
`;

const CardContainer = styled.div`
  margin-top: -100px;
  width: 80%; /* Adjusted width for responsiveness */
  max-width: 600px; /* Added max-width for larger screens */
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
  height: 380px;
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
  width: 100%; /* Full width for smaller screens */
  max-width: 300px; /* Added max-width for larger screens */
  box-sizing: border-box; /* Include padding and border in the width */
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

// Login component using styled-components
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      if (response && response.data.success){
        console.log('Login successful:', response.data);
        window.alert("Login Successful")
      navigate('/home');
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error('Login error:', error.response.data);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="container-fluid">
      <BackgroundImage></BackgroundImage>

      <CardContainer>
        <CardBody>
          <h2>Login now</h2>

          <form onSubmit={handleLogin}>
            <FormInputs>
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
              <SubmitButton className='submit-btn' type="submit">LOGIN</SubmitButton>
            </FormInputs>
          </form>
          <NavLink to='/signup' style={{ color: '#1266f1' }}>
            Don't have an account? Sign up
          </NavLink>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default Login;
