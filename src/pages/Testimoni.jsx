import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { testimonial } from '../data/index'
import FaqComponent from '../components/FaqComponent'

export default function Testimoni() {
    return (
        <div className='testimoni-page'>
            <div className='testimoni'>
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h1 className='text-center fw-bold animate__animated animate__fadeInUp'>Semua Testimoni</h1>
                            <p className='text-center animate__animated animate__fadeInUp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, ipsum.</p>
                        </Col>
                    </Row>
                    <Row className='row-cols-lg-3 row-cols-1'>
                        {testimonial.map((data) => {
                            return <Col key={data.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay} >
                                <p className='desc rounded text-start shadow p-3'>{data.desc}</p>
                                <div className='people justify-content-start align-items-center d-flex'>
                                    <img src={data.image} alt="people" className='my-3' />
                                    <div className='mx-3 text-start'>
                                        <h5 className='mb-1 fw-bold'>{data.name}</h5>
                                        <p className='m-0 '>{data.skill}</p>
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </Container>
            </div>
            <FaqComponent />
        </div>
    )
}
