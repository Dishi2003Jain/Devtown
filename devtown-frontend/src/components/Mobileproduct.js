import React from 'react';
import styled from 'styled-components';
import Mobiledata from '../Mobiledata';
import Mobilecard from './Mobilecard';

// Define a styled container for the Mobileproduct component
const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px; /* Adjust the gap as needed */
  padding: 20px; /* Add padding as needed */
`;
  
function Mobileproduct({ searchResults , selectedOptions }) {
  const filteredData = Mobiledata.filter((item) => {
    for (const key in selectedOptions) {
      if (selectedOptions[key] !== '' && item[key] !== selectedOptions[key]) {
        return false;
      }
    }
    return true;
  });
  console.log(filteredData);
  const productsToDisplay =
  filteredData.length > 0
    ? filteredData
    : searchResults.length > 0
    ? searchResults
    : Mobiledata;

  return (
    <>
     <h1 style={{textAlign:'center' , marginTop:'15px'}}>Your Products</h1>
    <ProductsContainer>
      {productsToDisplay.map(product => (
        <Mobilecard key={product.id} product={product} />
      ))}
    </ProductsContainer>
    </>
  );
}

export default Mobileproduct;
