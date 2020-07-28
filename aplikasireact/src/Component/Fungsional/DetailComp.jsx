import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

function DetailComp(props) {
    return (
        <div>
           
            <Jumbotron>
                <p><center> <h1>LEMARI</h1> </center></p> 
            <div className="imageatas">
         <center><img src="https://i.ibb.co/bXng3x6/lemari.jpg" alt="lemari" /></center> 
        </div>
       

        <p className="lead text-center">PRODUK LEMARI KACA ALMUNIUM DENGAN BEBAGAI JENIS WARNA,UKURAN DAN DESAIN</p>
        <hr className="my-2" />
        <p className="text-center">JL. MANGGA 1A CILACAP JAWA TENGAH</p>
            </Jumbotron>

            <Jumbotron>
            <p><center> <h1>KUSEN PINTU DAN JENDELA</h1> </center></p> 
            <div className="imageatas">
         <center><img src="https://i.ibb.co/Jm35Ckc/kusen.jpg" alt="kusen" /></center> 
        </div>
        
        <p className="lead text-center">PRODUK KUSEN PINTU DAN JENDELA DENGAN BERBAGAI JENIS WARNA,UKURAN DAN DESAIN</p>
        <hr className="my-2" />
        <p className="text-center">JL. MANGGA 1A CILACAP JAWA TENGAH</p>
            </Jumbotron>
            <Jumbotron>
            <p><center> <h1>PARTISI UNTUK JUALAN</h1> </center></p> 
            <div className="imageatas">
         <center><img src="https://i.ibb.co/nLqy7bV/gerobak.jpg" alt="gerobak" /></center> 
        </div>
        
        <p className="lead text-center">PRODUK PARTISI UNTUK JUALAN DENGAN BERBAGAI JENIS WARNA,UKURAN DAN DESAIN</p>
        <hr className="my-2" />
        <p className="text-center">JL. MANGGA 1A CILACAP JAWA TENGAH</p>
            </Jumbotron>
        </div>
    );
}

export default DetailComp 