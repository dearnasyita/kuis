import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (

      <div className="row">
        <div className="col m4">
          <div className="card">
            <form action="#" ref="ref">
              <div className="card-header">
                
              </div>
              <h3 className="card-title grey-text"><b>Tambah Produk</b></h3>
              <div className="card-content">
                <div className="row">
                  <div class="input-field col s12">
                    <input id="judul" type="text" class="validate"/>
                    <label for="judul">Judul</label>
                  </div>
                  <div class="input-field col s12">
                    <input id="keterangan" type="text" class="validate"/>
                    <label for="keterangan">Keterangan </label>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>

        <div className="col m8">
          <div className="row">
            <Product judul="mobil" keterangan ="I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively."/>    
            <Product judul="hape" keterangan ="I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively."/>
            <Product judul="motor" keterangan ="I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively."/>
            <Product judul="laptop" keterangan ="I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively."/>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
