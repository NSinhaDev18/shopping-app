import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ margin: "0px 15px" })}
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "rgb(238, 236, 236)",
  })}
  ${mobile({ margin: "0px 15px" })}
`;
const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>The Tea Lab</Logo>
        <Desc>
          Welcome to our online tea and coffee emporium, where the artistry of
          brewing meets the convenience of the digital age. Immerse yourself in
          a world of aromatic delights as you explore our curated selection of
          premium teas and coffees sourced from the finest plantations around
          the globe.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5889">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3A5999">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3B6899">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Coffee</ListItem>
          <ListItem>Tea</ListItem>
          <ListItem>Equipments</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> 61, 5th cross Avenue,
          Bangalore, Karnataka
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 987 654 3210
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} /> thetealab@gmail.com ,
          contact@thetealab.dev
        </ContactItem>
        <Payment src="https://t4.ftcdn.net/jpg/04/73/84/61/240_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg" />
      </Right>
    </Container>
  );
}

export default Footer;
