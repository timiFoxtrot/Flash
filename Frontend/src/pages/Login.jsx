import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)
    try {
      await axios.post("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then(data => {
          console.log(data)
          if (data.error !== '') {
            setError(true)
            toast.error(data.error, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } if (data.error === undefined) {
            setLoggedIn(true)
            toast.success(`You are logged in ${data.data.user_name}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/home/public")
          }
          console.log(data, 'userLogin', loggedIn, error)
        })
    } catch (error) {
      console.log(error)
    }

    setEmail('')
    setPassword('')

  }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Log In</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>


                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account??{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  )
}

export default Login;






