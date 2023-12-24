import React, { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useCart } from '../context/Cartpage';
import { Badge } from 'antd';
import Mobiledata from '../Mobiledata';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0; /* Stick to the top of the viewport */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #333;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;



const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;

  input[type='text'] {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
    width: 280px;
  }

  svg {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Navright = styled.div`
  display: flex;
  align-items: center;
`;


const Navbar = ({ setSearchResults ,  isLoggedIn}) => {
  const [cart] = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      // Make a request to your backend endpoint to clear the user session/token
      // For example:
      await axios.post('http://localhost:8080/auth/logout');
      
      // Clear local storage or perform any necessary cleanup
      localStorage.removeItem('token');

      // Redirect to the login page or any other page after logout
       navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error, if any
    }
  };
  const handleSearchChange = event => {
    const { value } = event.target;
    setSearchTerm(value);
    const filteredProducts = Mobiledata.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredProducts); // Set search results in parent component
  };

  return (
    <NavbarContainer>
      <Logo>Mobile Munch</Logo>
      <Navright>
        <SearchBox>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FaSearch style={{ fontSize: '1.2rem' }} />
        </SearchBox>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
          <Badge count={cart?.length} showZero offset={[-43, 14]}>
            <FaShoppingCart
              style={{
                fontSize: '1.2rem',
                margin: '20px 50px',
                color: 'white',
                cursor: 'pointer',
              }}
            />
          </Badge>
        </Link>
        <RiLogoutBoxRLine style={{ fontSize: '1.2rem' , cursor:'pointer'}} onClick={handleLogout}/>
      </Navright>
      {/* Display search results */}
    </NavbarContainer>
  );
};

export default Navbar;