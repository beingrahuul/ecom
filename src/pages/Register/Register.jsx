import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


import  { useAuthContext } from '../../hooks/useAuthContext'
import { useSignup } from '../../hooks/useSignup'
import styled from "styled-components"

import { mobile } from "../../responsive"


//Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5), 
    rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}

`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  width: 100%;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`


function Register() {

  const { user } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user){
      navigate('/')
    }
  })

  const [formData, setFormData] = useState({
    email:'',
    name:'',
    password: '',
    password2: ''

  })

  const {signup, isPending, error} = useSignup()


  const handleSubmit = async(e) => {
    e.preventDefault()
    if(formData.password === formData.password2){
      await signup(formData.email, formData.password, formData.name);
    }
  }

  const handleChange = (e) => {
 
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form onSubmit={handleSubmit} >
          <Input 
            placeholder="Name" 
            name='name'
            required
            onChange={handleChange}
            value={formData.name}
          />
          <Input 
            placeholder="Email"
            name='email'
            required
            onChange={handleChange}
            value={formData.email}
          />
          <Input 
            placeholder="Password"
            type="password"
            required
            name='password'
            onChange={handleChange}
            value={formData.password}
          />
          <Input 
            placeholder="Confirm password" 
            type="password"
            name='password2'
            required
            onChange={handleChange}
            value={formData.password2}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register