import React, {useReducer, useContext} from 'react';
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap';

import {NavLink} from 'react-router-dom'
import { keranjangContext } from '../../../App';

function HooksReducer() {

    const countContext = useContext(keranjangContext)
    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="https://i.ibb.co/q1t66XK/logo-fiks.jpg" alt="logo-fiks" />
                    </Card>
                </Col>
               <Col xs="6">
                    <h3>Furniture</h3>
                    <p>Harga</p>
                   
                    <h3>Rp. {countContext.keranjangState.hargatotal}</h3>
                    <p>Jumlah</p>
                    <Row>
                
                    <Col><Button onClick={()=> countContext.keranjangDispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={()=> countContext.keranjangDispatch({type:'kurang'})} >-</Button></Col>

                    </Row>
                    <br/>
                    <Button color="success" size="lg">Total Rp. {countContext.keranjangState.hargatotal}</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default HooksReducer;