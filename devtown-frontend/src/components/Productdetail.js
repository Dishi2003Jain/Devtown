import React from 'react';
import { useParams } from 'react-router-dom';
import Mobiledata from '../Mobiledata';
import image from '../assets/phone.jpg';
import styled from 'styled-components';
import { useCart } from '../context/Cartpage';

// Styled components
const ProductBox = styled.div`
  max-width: 1100px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  background-color: #ffffff;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 370px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const DetailContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const DetailTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 20px;
  text-align: center;
`;

const DetailParagraph = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #28a745;
  margin-top: 20px;
  
`;
const ProductLeft = styled.div`
`;
function getProductById(id) {
  return Mobiledata.find(product => product.id === id);
}

function Productdetail() {
  const { id } = useParams();
  const product = getProductById(parseInt(id));
  const [cart, setCart] = useCart();
  if (!product) {
    return <div>Product not found!</div>;
  }
  const handleAddToCart = () => {
    // Add functionality for adding to cart
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]) );
    alert(`Added ${product.name} to cart`);
  };

  return (
    <ProductBox>
      <h3 style={{textAlign:'center'}}>Product Details</h3>
      <ProductItem>
        <ProductLeft>
        <ProductImage src={image} alt={product.name} />
        <DetailTitle>{product.name}</DetailTitle>
        </ProductLeft>
        <DetailContainer>
          <DetailParagraph>{product.description}</DetailParagraph>
          <DetailParagraph> Price : ${product.price.toFixed(2)}</DetailParagraph>
          <DetailParagraph>Color : {product.color}</DetailParagraph>  
          <DetailParagraph>Memory : {product.memory}</DetailParagraph>
          <DetailParagraph>Processor : {product.processor}</DetailParagraph>
          <DetailParagraph>OS : {product.OS}</DetailParagraph>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </DetailContainer>
      </ProductItem>
    </ProductBox>
  );
}

export default Productdetail;
