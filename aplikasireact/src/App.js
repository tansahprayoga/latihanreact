import React, {useState, createContext, useReducer} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
import HooksReducer from './Component/Hooks/Functional/HooksReducer';
import Tagihan from './Component/Hooks/Functional/Tagihan';
import LoginComp from'./Component/Fungsional/LoginComp';
import DaftarComp from './Component/Fungsional/DaftarComp';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
// import BootstrapComp from './Component/Class/BootstrapComp';
//import Parent from './Component/Class/Parent';
// import logo from './logo.svg';
// import './App.css';

// import Beranda from './Component/Class/Beranda';

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000
}

export const keranjangContext = createContext()

const reducer = (state, action) => {
  switch (action. type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      }
      case 'kurang': return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
      }
      default:
          return state
  }
}
const App = () => {
  const [value, setValue] = useState(0)

  const[count, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
      <CartContext.Provider value={{value, setValue}}>
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch:dispatch}}>
        <switch>
        <Route exact path="/" component={LoginComp}/>
      <Route exact path="/daftar" component={DaftarComp}/>
      <Route exact path="/detail" component={DetailComp}/>
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/produk" component={ListComp} />
          <Route exact path="/produk/tambah" component={TambahComp} />
          <Route exact path="/produk/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffects} />
          <Route exact path="/produk" component={ProductComp} />
          <Route exact path="/reducer" component={HooksReducer} />
          <Route exact path="/tagihan" component={Tagihan} />
          {/*<Route exact path="/detail/:id" component={DetailComp} />*/}
        </switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
export default App;