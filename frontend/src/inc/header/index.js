import React from 'react';
import styles from './style.css'

import ImgLogo from './assets/logo.svg'

function Header() {
  return (
    <div className='barra-navegacao'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-pink">
        <a className="navbar-brand ml-sm-5" href="/">
          <img src={ImgLogo} width="30" height="30" alt="logo"/> 
        </a>
        <a className="navbar-brand" href="/" style={{fontSize: 32, fontWeight: 100}}>|</a>
        <a className="navbar-brand" href="/" style={{fontSize: 25}}>Pet Paws</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto navbar-brand" style={{margin: 'auto'}} >
            <li className="nav-item active">
              <a className="nav-link" href="about">Sobre</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="ongs">ONGs</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="contact">Contato</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="donations">Doações</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-5" style={{width: 300, height: 45}} type="search" placeholder="Buscar pets" aria-label="Search" />
          </form>
        </div>
    </nav>
    </div>
  );
}

export default Header;