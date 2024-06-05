import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userAction'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  console.log()

  const leetCode_info = useSelector((state) => state.leetCode.leetCode_info)
  console.log(leetCode_info.username)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {loading && <h1>Loading...</h1>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='username'>
          <Form.Label>Enter Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Leetcode Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Row className='py-2'>
          <Col>
            <Button type='submit' variant='primary'>
              Sign In
            </Button>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
