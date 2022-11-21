import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../../responsive';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'

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
  font-weight: 900;
  ${mobile ({
    fontSize: '18px',
    marginLeft: "10px",
  })}
`

const User = styled.h1`
  font-weight: bold;
  font-size: 18px;

  ${mobile ({
    fontSize: '10px',
    marginLeft: "10px",
  })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  
  ${mobile ({
    flex: '1',
    justifyContent: 'center'
  })}
`

const Logout = styled.div`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  
  ${mobile ({
    fontSize: '12px',
    marginLeft: "5px",
    marginRight: "5px"
  })}

`

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  margin-left: 25px;
  
  ${mobile ({
    fontSize: '12px',
    marginLeft: "5px",
    marginRight: "5px"
  })}

`

function Navbar() {

  const { logout } = useLogout()
  const {user} = useAuthContext()

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
              APNI DUKAAN
            </Link>
          </Logo>
        </Center>
        <Right>
          
          {user && 
            (<>
              <User>Welcome, {user.displayName} !</User>
              <Logout onClick={logout}>Logout</Logout>
              <MenuItem>
              <Link to='/cart'>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon color="action" />
                </Badge>
              </Link>
              </MenuItem>
            </>)
          }
          
          {!user && 
            (<>
              <MenuItem><Link to='/register'>REGISTER</Link></MenuItem>
              <MenuItem><Link to='/login'>SIGN IN</Link></MenuItem>
            </>)
          }
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar