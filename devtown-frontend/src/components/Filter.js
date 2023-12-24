import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

const FilterDash = styled.div`
  position: sticky;
  top: 130px; /* Adjust the top distance as needed */
  height: 80vh; /* Adjust the max-height as needed */
  overflow-y: auto; /* Enable vertical scroll if content exceeds the height */
  border: 1px solid #ccc;
  margin: 2.5rem 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow-y: scroll;
 /* Hide scrollbar on Firefox */
 scrollbar-width: none;
 /* Hide scrollbar on WebKit browsers */
 &::-webkit-scrollbar {
   display: none;
 }
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  cursor: pointer;
  color: #333;
  border: 1px solid #e0e0e0;
  padding: 0.8rem;
  margin-top: 1rem;
  border-radius: 4px;
  &:hover {
    color: blue;
    border-color: #b2b2b2;
  }
`;
const FilterList = styled.div`
  display: ${({ showList }) => (showList ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 1rem;
  justify-content: center;
  margin-left: 4rem;
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  input {
    margin-right: 0.5rem;
    width: 15px; /* Set width for square input */
    height: 15px; /* Set height for square input */
    appearance: none; /* Remove default styles */
    border: 2px solid #333; /* Add border for square */
    border-radius: 3px; /* Adjust border radius for square appearance */
    outline: none; /* Remove outline on focus */
    cursor: pointer;
  }
  input:checked {
    background-color: #333; /* Change background color when checked */
  }
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const brands = ['OnePlus', 'iPhone', 'Google', 'Xiaomi', 'Sony']; // Add your brand names here
const colors = ['Blue', 'Black', 'White']; // Add your color names here
const priceRanges = ['Under $200', '$200 - $500', '$500 - $1000', 'Over $1000']; // Add price range options
const operatingSystems = ['Android 11', 'iOS 15', 'Android 12', 'OxygenOS 11','MIUI 12']; // Add OS options
const memoryOptions = ['64GB', '128GB', '256GB']; // Add memory options
const processorOptions = ['Snapdragon', 'A15 Bionic chip']; // Add processor options

function Filter({ onSelect }) {
  const [filterStates, setFilterStates] = useState({
    brands: false,
    colors: false,
    priceRanges: false,
    operatingSystems: false,
    memoryOptions: false,
    processorOptions: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    brand: '',
    color: '',
    price: '',
    OS: '',
    memory: '',
    processor: '',
  });
  onSelect(selectedFilters);
  const toggleList = (list) => {
    setFilterStates((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === list ? !prevState[key] : false;
        return acc;
      }, {}),
    }));
  };

  const resetFilters = () => {
    setFilterStates({
      brands: false,
      colors: false,
      priceRanges: false,
      operatingSystems: false,
      memoryOptions: false,
      processorOptions: false,
    });

    const emptyFilters = {
      brand: '',
      color: '',
      price: '',
      OS: '',
      memory: '',
      processor: '',
    };

    setSelectedFilters(emptyFilters); // Pass the empty filters to the parent component
  };
  const handleFilterChange = (name, value) => {
    setSelectedFilters({ ...selectedFilters, [name]: value });
  };
  
    return (
      <FilterDash>
       <h4 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Filters</h4>
        <FilterItem onClick={() => toggleList('brands')}>
          <h6>BrandName</h6>
          <FaPlus />
        </FilterItem>
        <FilterList showList={filterStates.brands}>
        {brands.map((brand) => (
          <FilterLabel key={brand}>
            <input type="radio" name="brand" value={brand}  onChange={(e) => handleFilterChange('brandName', e.target.value)} />
            {brand}
          </FilterLabel>
        ))}
        </FilterList>
  
        {/* Add other filters similarly */}
        
        {/* Color */}
        <FilterItem onClick={() => toggleList('colors')}>
          <h6>Color</h6>
          <FaPlus />
        </FilterItem>
        <FilterList showList={filterStates.colors}>
        {colors.map((color) => (
          <FilterLabel key={color}>
            <input type="radio" name="color" value={color} onChange={(e) => handleFilterChange('color', e.target.value)} />
            {color}
          </FilterLabel>
        ))}
        </FilterList>
  
        {/* Price Range */}
        <FilterItem onClick={() => toggleList('priceRanges')}>
          <h6>Price Range</h6>
          <FaPlus />
        </FilterItem>
        <FilterList showList={filterStates.priceRanges}>
        {priceRanges.map((range) => (
          <FilterLabel key={range}>
            <input type="radio" name="priceRange" value={range} onChange={(e) => handleFilterChange('price', e.target.value)} />
            {range}
          </FilterLabel>
        ))}
        </FilterList>
  
        {/* Operating System */}
        <FilterItem onClick={() => toggleList('operatingSystems')}>
          <h6>Operating System</h6>
          <FaPlus />
        </FilterItem>
        <FilterList showList={filterStates.operatingSystems}>
        {operatingSystems.map((os) => (
          <FilterLabel key={os}>
            <input type="radio" name="operatingSystem" value={os} onChange={(e) => handleFilterChange('OS', e.target.value)}  />
            {os}
          </FilterLabel>
        ))}
        </FilterList>
  
        {/* Memory */}
        <FilterItem onClick={() => toggleList('memoryOptions')}>
          <h6>Memory</h6>
          <FaPlus />
        </FilterItem>
        <FilterList showList={filterStates.memoryOptions}>
        {memoryOptions.map((memory) => (
          <FilterLabel key={memory}>
            <input type="radio" name="memory" value={memory} onChange={(e) => handleFilterChange('memory', e.target.value)} />
            {memory}
          </FilterLabel>
        ))}
        </FilterList>
  
        {/* Processor */}
        <FilterItem onClick={() => toggleList('processorOptions')}>
          <h6>Processor</h6>
          <FaPlus />
        </FilterItem>
        <FilterList showList={filterStates.processorOptions}>
        {processorOptions.map((processor) => (
          <FilterLabel key={processor}>
            <input type="radio" name="processor" value={processor} onChange={(e) => handleFilterChange('processor', e.target.value)} />
            {processor}
          </FilterLabel>
        ))}
        </FilterList>
        <ResetButton onClick={resetFilters}>Reset Filters</ResetButton>
      </FilterDash>
    );
  }
  
  export default Filter;