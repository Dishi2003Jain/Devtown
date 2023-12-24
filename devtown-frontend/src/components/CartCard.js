import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/Cartpage';
import image from '../assets/phone.jpg';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

`;

const Image = styled.img`
  width: 250px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #dc3545;
`;

const CartCard = ({ product }) => {
  const [cart, setCart] = useCart();

  const removeCartItem = (productId) => {
    try {
      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardContainer>
      <Image src={image} alt="" />
      <Details>
        <Title>{product.name}</Title>
        <h6>Price: ${product.price}</h6>
        <h6>Color: {product.color}</h6>
        <h6>Memory: {product.memory}</h6>
      </Details>
      <Button onClick={() => removeCartItem(product.id)}>Remove Item</Button>
    </CardContainer>
  );
};

export default CartCard;
