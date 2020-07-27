import React, { PureComponent } from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3003'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            response: '',
            display: 'none'
        }
    }
    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                produk: res.data.values
            })
        })
    }

    Deleteproduk = (id_produk) => {
        const { produk } = this.state
        const data = qs.stringify({
            id_produk: id_produk
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    produk: produk.filter(produk => produk.id_produk !== id_produk),
                    dislpay: 'block'
                })
                //this.props.history.push('/produk')
            } else {
                this.setState({
                    response: json.data.values,
                    dislpay: 'block'
                })
                //this.props.history.push('/mahasiswa')
            }
        })
    }

    render() {
        return (
            <Container>
                <h2>DATA PRODUK</h2>
                <Alert color="success" style={{ dislpay: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/produk/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama Produk</th>
                            <th>Harga Produk</th>
                            <th>Stok Produk</th>
                            <th>Opsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.produk.map(produk =>
                            <tr key={produk.id_produk}>
                                <td>{produk.nama_produk}</td>
                                <td>{produk.harga_produk}</td>
                                <td>{produk.stok_produk}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/produk/edit',
                                                state: {
                                                    id_produk: produk.id_produk,
                                                    nama_produk: produk.nama_produk,
                                                    harga_produk: produk.harga_produk,
                                                    stok_produk: produk.stok_produk
                                                }
                                            }
                                        }>
                                        <Button>Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deleteproduk(produk.id_produk)} color="danger">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
export default ListComp;