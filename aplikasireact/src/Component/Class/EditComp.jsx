import React, { PureComponent } from 'react';
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import qs from 'querystring'

const api = 'http://localhost:3003'

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_produk: this.props.location.state.id_produk,
            nama_produk: this.props.location.state.nama_produk,
            harga_produk: this.props.location.state.harga_produk,
            stok_produk: this.props.location.state.stok_produk,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahproduk = (id_produk) => {
        const data = qs.stringify({
            id_produk: id_produk,
            nama_produk: this.state.nama_produk,
            harga_produk: this.state.harga_produk,
            stok_produk: this.state.stok_produk
        });

        axios.put(api+ '/ubah', data)
        .then(json => {
            if(json === 200) {
                this.setState({
                    response: json.data.values,
                    dislpay: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    dislpay: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{ dislpay: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>NAMA PRODUK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_produk" value={this.state.nama_produk} onChange={this.handleChange} placeholder="Masukan Nama Produk" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>HARGA PRODUK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga_produk" value={this.state.harga_produk} onChange={this.handleChange} placeholder="Masukan harga_produk" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>STOK PRODUK</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="stok_produk" value={this.state.stok_produk} onChange={this.handleChange} placeholder="Masukan stok_produk" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={()=>this.ubahproduk(this.state.id_produk)}>Update</Button>
                                </Col>
                            </Row>
                        </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditComp; 