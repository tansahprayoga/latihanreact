import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';

function AboutComp () {

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">PROFILE PERUSAHAAN </h1>
                <p className="lead">Perusahaan yang bergerak dibidang barang dan jasa dengan Produksi Barang Furniture Berkwalitas Baik dan Bergaransi</p>
                <hr className="my-2" />
                <p>MOTO PERUSAHAAN : BERKARYA BERSAMA BERMAKNA</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="LEMARI" tanggal="27/07/2020"/></Col>
                    <Col><CardComp id="2" judul="KUSEN PINTU DAN JENDELA" tanggal="27/07/202"/></Col>
                    <Col><CardComp id="3" judul="PARTISI UNTUK JUALAN" tanggal="27/07/202"/></Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutComp