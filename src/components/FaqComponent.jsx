import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { faq } from '../data/index'

export default function FaqComponent() {
    return (
        <div className='faq'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center fw-bold animate__animated animate__fadeInUp'>Pertanyaan yang sering ditanyakan</h2>
                    </Col>
                </Row>
                <Row className='row-cols-lg-2 row-cols-1 g-3 pt-5'>
                    {faq.map((data) => {
                        return (
                            <Col key={data.id} data-aos="fade-up" data-aos-duration="1000">
                                <Accordion className='shadow-sm'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{data.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {data.desc}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
