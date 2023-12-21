import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
    alignItems: "center",
  })};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh", width: "90%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px", width: "90%", justifyContent: "center" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ width: "99%" })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "90%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  ${mobile({ padding: "10px" })}
  &:hover {
    background-color: whitesmoke;
  }
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://bluetokaicoffee.com/cdn/shop/files/NewPouchesLisiting.jpg?v=1692771619" />
        </ImgContainer>
        <InfoContainer>
          <Title>Title</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            odio harum nisi id reprehenderit dolorem earum aliquam nulla?
            Numquam ratione dignissimos facere voluptate corporis enim voluptas
            aliquam laborum! Nostrum, in.
          </Desc>
          <Price>Rs 1000/-</Price>
          <AddContainer>
            <AmountContainer>
              <RemoveCircle />
              <Amount>1</Amount>
              <AddCircle />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
