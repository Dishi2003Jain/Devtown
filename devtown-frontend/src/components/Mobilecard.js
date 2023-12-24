import React from 'react';
import styled from 'styled-components';
import image from '../assets/phone.jpg';
import { Link } from 'react-router-dom';
import { useCart } from '../context/Cartpage';
const Card = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 15px;
`;

const Title = styled.h5`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  margin-left: 5px;

`;

function Mobilecard({ product }) {
  const {id,name,
    brandName,
    type,
    processor,
    memory,
    color,
    OS,
    price,
    description } = product;
  const [cart, setCart] = useCart();
  const handleAddToCart = () => {
    // Add functionality for adding to cart
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]) );
    alert(`Added ${name} to cart`);
  };

  return (
    <Card>
      <CardImage src={image} alt={name} />
      <CardBody>
        <Title>{name}</Title>
        <Price>Price: ${price.toFixed(2)}</Price>
        <ButtonGroup>
          <Link  to={{ pathname: `/product/${id}` }} style={{ textDecoration: 'none' }}>
            <Button style={{backgroundColor: '#17a2b8'}}>More Details</Button>
          </Link>
          <Button style={{backgroundColor: '#28a745'}} onClick={handleAddToCart}>Add to Cart</Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
}

export default Mobilecard;
