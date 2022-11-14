import styled from "styled-components"
import { mobile } from '../../responsive';

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

//Styled Components
const Container = styled.div`
  display: flex;
  ${mobile ({
    flexDirection: "column",
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`
  
`

const Decs = styled.p`
  margin: 20px 0px;

`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props =>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Payment = styled.img`
    width: 25%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Beingrahuul.</Logo>
        <Decs>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores enim perferendis fugiat, est nulla corporis illo ea similique, libero eligendi aspernatur molestiae quibusdam quod non ex in reiciendis unde distinctio.</Decs>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color="e60023">
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><LocationOnIcon /> Blah Blah blah blah blah</ContactItem>
        <ContactItem><PhoneIcon /> +121321312 </ContactItem>
        <ContactItem><EmailIcon /> bringrahuul@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer