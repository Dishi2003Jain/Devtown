import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/Cartpage';
import CartCard from './CartCard';

const CartContainer = styled.div`
  text-align: center;
  margin: 20px;
  width: 55%;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardCon = styled.div`
  display: flex;
`;

const CartSummary = styled.div`
  border: 1px solid #ddd;
  width: 40%;
  padding: 20px;
  margin-top: 3.5rem;
  height: 50vh;
  text-align: center;
`;

const SummaryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SummaryLabel = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const SummaryValue = styled.span`
  color:#dc3545;
  font-weight: 800;
  font-size: 1.5rem;
`;

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CardCon>
      <CartContainer>
        <h3>
          {cart?.length
            ? `You have ${cart.length} items in your cart`
            : 'Your Cart Is Empty'}
        </h3>
        <CartItems>
          {cart?.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </CartItems>
      </CartContainer>
      <CartSummary>

        <SummaryTitle>Cart Summary</SummaryTitle>
        <SummaryItem>
          <SummaryLabel>Total Items:</SummaryLabel>
          <SummaryValue>{cart?.length || 0}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>Total Price:</SummaryLabel>
          <SummaryValue>{totalPrice()}</SummaryValue>
        </SummaryItem>
      </CartSummary>
    </CardCon>
  );
};

export default Cart;
