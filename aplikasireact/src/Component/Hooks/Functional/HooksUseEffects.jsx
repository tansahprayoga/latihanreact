import React, { useEffect, useState } from 'react'
import { Container, Table, Button } from 'reactstrap';
import axios from 'axios'

const api = 'http://localhost:3003'

function HooksUseEffects() {

    const [produk, setproduk] = useState([])

    useEffect(() => {
        console.log("Memanggil Use Effect")

        axios.get(api + '/tampil').then(res => {
            setproduk(res.data.values)
        })
    }, [])

    return (
        <Container>
            <h2> DATA PRODUK FURNITURE</h2>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>Nama Produk</th>
                        <th>Harga Produk</th>
                        <th>Stok Produk</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {produk.map(produk =>
                        <tr key={produk.id_produk}>
                            <td>{produk.nama_produk}</td>
                            <td>{produk.harga_produk}</td>
                            <td>{produk.stok_produk}</td>
                           
                        </tr>
                    )}
                </tbody>

            </Table>
        </Container>


    )


}


export default HooksUseEffects;