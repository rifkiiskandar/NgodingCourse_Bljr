import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function FooterComponent() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <h3 className='fw-bold'>Ngoding.</h3>
                        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Labore quia, nesciunt error beatae a libero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores obcaecati consequatur ex voluptatum sequi laborum.</p>
                        <div className='no'>
                            <Link className='text-decoration-none text-black'>
                                <i className='fa-brands fa-whatsapp'></i>
                                <p className='m-0'>08229288829</p>
                            </Link>
                        </div>
                        <div className='mail'>
                            <Link className='text-decoration-none text-black'>
                                <i className='fa-regular fa-envelope'></i>
                                <p className='m-0'>sayasendirian@gmail.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column mt-lg-0 mt-5'>
                        <h3 className='fw-bold'>Menu</h3>
                        <Link to="/">Home</Link>
                        <Link to="/kelas">Kelas</Link>
                        <Link to="/testimoni">Testimoni</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/syaratketentuan">Syarat & Ketentuan</Link>
                    </Col>
                    <Col className='mt-lg-0 mt-5'>
                        <h3 className='fw-bold mb-3'>Subcribe untuk Info Menarik</h3>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Subscribe..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className='border-black shadow-sm'
                            />
                            <Button variant="danger" id="button-addon2" className='shadow-sm  mx-1 ' >
                                Button
                            </Button>
                        </InputGroup>
                        <div className='sosmed'>
                            <Link className='fa-brands fa-twitter'></Link>
                            <Link className='fa-brands fa-facebook'></Link>
                            <Link className='fa-brands fa-linkedin'></Link>
                            <Link className='fa-brands fa-youtube'></Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center '>
                        @Created by <span className='fw-bold'>RF</span> {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
