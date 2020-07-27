import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { UncontrolledCarousel } from 'reactstrap';


const items = [

  {
    src: 'https://entrepreneur.indiegogo.com/how-it-works/wp-content/uploads/sites/5/2017/07/IGG_HIW-header-1440x400.png',

    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'JAWA TENGAH',
    key: '1'
  },
  {
    src: 'https://www.americaspromise.org/sites/default/files/d8/styles/hero_image/public/2017-01/Closing%20the%20High%20School%20Graduation%20Gap%20for%20Low-Income%20Students.jpg?itok=ytPnu7TK',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'http://widiatmika.sch.id/uploads/image/foto-cover/web-uk-kecil-size-01.jpg',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  }
];

const Home = () => <UncontrolledCarousel items={items} />;

function HomePage() {

  return (
    <div>

      <Jumbotron>
      <div className="imageatas">
         <center><img src="https://i.ibb.co/RYKqQqc/logo2.jpg" alt="logo2" /></center> 
        </div>
        <h1 className="display-3 text-center">KAWAN BARU ALMUNIUM</h1>

        <p className="lead text-center">PERUSAHAAN YANG BERGERAK DIBIDANG FURNITURE MENGGUNAKAN BAHAN ALMUNIUM</p>
        <hr className="my-2" />
        <p className="text-center">JL. MANGGA 1A CILACAP JAWA TENGAH</p>
        <p className="lead">
      <center><Button color="success" >CONTACT</Button></center>    
        </p>
      </Jumbotron>

    </div>
  )
}
export default HomePage