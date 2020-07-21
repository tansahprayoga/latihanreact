import React, { PureComponent } from 'react';

class KelasComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            jumlah: 0
        }
    }


    tambahproduk = () => {
        this.setState({
            jumlah: this.state.jumlah +1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.jumlah}</h1>
                <button onClick={this.tambahproduk}>Tambah Produk</button>
            </div>
        );
    }
}

export default KelasComp;