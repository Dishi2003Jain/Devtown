import React, { useState , useEffect} from 'react';
import Navbar from './Navbar';
import Mobileproduct from './Mobileproduct';
import Filter from './Filter';
import styled from 'styled-components';
import axios from 'axios';
const MainPage = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterContainer = styled.div`
  width: 20%; /* Adjust the width as needed */
`;

const MobileProductContainer = styled.div`
  width: 80%; /* Adjust the width as needed */
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, Edge */
  }

`;

function Home() {
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [selectedOptions, setSelectedOptions] = useState({
    brand: '',
    color: '',
    price: '',
    OS: '',
    memory: '',
    processor: '',
  });

  const handleSelectedFilters = (selectedFilters) => {
    setSelectedOptions(selectedFilters);
  };
  return (
    <>
      <Navbar setSearchResults={setSearchResults}/> {/* Pass setSearchResults to Navbar */}
      <MainPage>
        <FilterContainer>
          <Filter onSelect={handleSelectedFilters}/> {/* Display the Filter component */}
        </FilterContainer>
        <MobileProductContainer>
          <Mobileproduct searchResults={searchResults} selectedOptions={selectedOptions}/> {/* Pass searchResults to Mobileproduct */}
        </MobileProductContainer>
      </MainPage>
    </>
  );
}

export default Home;
