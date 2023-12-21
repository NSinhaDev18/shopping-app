import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ justifyContent: "center" })}
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    width: "0px 30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "20px", fontSize: "18px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ fontSize: "12px", margin: "5px 0px" })}
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Coffee</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option selected>Products</Option>
            <Option>Coffee power</Option>
            <Option>Coffee beans</Option>
            <Option>Tea</Option>
            <Option>Equipments</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Featured</Option>
            <Option>Best Selling</Option>
            <Option>Price, low to high</Option>
            <Option>Price, high to low</Option>
            <Option>Date, new to old</Option>
            <Option>Date, old to new</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default ProductList;
