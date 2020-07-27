import React, { PureComponent } from 'react';
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3003'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            nama_produk: '',
            harga_produk: '',
            stok_produk: '',
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addproduk = () => {
        axios.post(api+ '/tambah', {
            nama_produk: this.state.nama_produk,
            harga_produk: this.state.harga_produk,
            stok_produk: this.state.stok_produk
        }).then(json =>  {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{dislpay: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>NAMA PRODUK</Label>
                    <FormGroup>
                        <Row>
                           <Col>
                                <Input type="text" name="nama_produk" value={this.state.nama_produk} onChange={this.handleChange} placeholder="Masukan nama_produk"/>
                           </Col> 
                        </Row>
                    </FormGroup>

                    <Label>HARGA PRODUK</Label>
                    <FormGroup>
                        <Row>
                           <Col>
                                <Input type="text" name="harga_produk" value={this.state.harga_produk} onChange={this.handleChange} placeholder="Masukan harga_produk"/>
                           </Col> 
                        </Row>
                    </FormGroup>

                    <Label>STOK PRODUK</Label>
                    <FormGroup>
                        <Row>
                           <Col>
                                <Input type="text" name="stok_produk" value={this.state.stok_produk} onChange={this.handleChange} placeholder="Masukan stok_produk"/>
                           </Col> 
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                           <Col>
                                <Button type="button" onClick={this.Addproduk}>Submit</Button>
                           </Col> 
                        </Row>
                    </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default TambahComp;