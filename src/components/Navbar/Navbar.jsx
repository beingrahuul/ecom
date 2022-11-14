import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../../responsive';

//material-ui
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
  ${mobile ({
    height: '50px'
  })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile ({
    padding: '10px 0px'
  })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile ({
    display: 'none'
  })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile ({
    marginLeft: "5px",
  })}
`

const Input = styled.input`
  border: none;
  outline: none;

  ${mobile ({
    width: '60px'
  })}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile ({
    fontSize: '20px',
    marginLeft: "10px",
  })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile ({
    flex: '2',
    justifyContent: 'center'
  })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile ({
    fontSize: '12px',
    marginLeft: "5px",
    marginRight: "5px"
  })}
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <SearchIcon style={{color: 'gray', fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to='/'>
            Beingrahuul.
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem><Link to='/register'>REGISTER</Link></MenuItem>
          <MenuItem><Link to='/login'>SIGN IN</Link></MenuItem>
          <MenuItem>
          <Link to='/cart'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar