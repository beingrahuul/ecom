import styled from "styled-components"
import { useState } from "react";
import { sliderItems } from "../../data";
import { mobile } from '../../responsive';

//material ui
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile ({
    display: "none"
  })}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
  transform: translateX(${props => props.index * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;
`

const Image = styled.img`
  height: 80%;
  
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: bold;
  }
`

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction ==='left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper index = {slideIndex}>

        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer> <Image src={item.img}/></ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}    

      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider