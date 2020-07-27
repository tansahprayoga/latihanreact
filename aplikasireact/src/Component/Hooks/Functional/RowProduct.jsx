import React, { Component } from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';

function RowProduct() {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://i.ibb.co/RYKqQqc/logo2.jpg" alt="logo2" />
               
                <CardBody>
                    <CardTitle> Furniture </CardTitle>
                    <CardSubtitle>Rp. 2.500.000</CardSubtitle>
                    <CardText>Produk Furniture Almunium dengan design yang elegan </CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    );
}


export default RowProduct;