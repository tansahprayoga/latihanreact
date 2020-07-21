import React from 'react'
import Blog from './Blog'
import Produk from '../Class/Produk';

const Home = () => {
    return <div>
      <Produk nama="Lemari Baju Almunium Super" stock="10" harga="5000000"/>
      <Produk nama="Lemari Baju Almunium Medium" stock="10" harga="3500000"/>
      <Produk nama="Lemari Baju Almunium Sedang" stock="10" harga="2500000"/>
      <Produk nama="Lemari Baju Almunium Kecil" stock="10" harga="2000000"/>
      <Produk nama="Lemari Baju Almunium Second" stock="10" harga="1000000"/>
    </div>
}
export default Home;