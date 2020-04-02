import React from 'react';
import styles from './style.css'
import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Search } from 'react-feather'
import ImgLogo from './assets/logo.svg'
import SearchIcon from './assets/searchIcon.svg'

import Inputizinho from './inputzinho'

function Header() {
  const history = useHistory()
  
  function handleHome(e){
    e.preventDefault()

    history.push('/')
  }

  function handleAbout(e) {
    e.preventDefault()
    
    history.push('/about')
  }

  function handleOngs(e){
    e.preventDefault()

    history.push('/ongs')
  }

  function handleContact(e){
    e.preventDefault()

    history.push('/contact')
  }

  function handleDonations(e){
    e.preventDefault()

    history.push('/donations')
  }


  return (
    <div className='barra-navegacao'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-pink">
        <a className="navbar-brand ml-sm-5" onClick={handleHome} style={{cursor: 'pointer'}}>
          <img src={ImgLogo} width="35" height="35" alt="logo"/> 
        </a>
        <a className="navbar-brand" onClick={handleHome} style={{fontSize: 28, fontWeight: 100, cursor: 'pointer'}}>|</a>
        <a className="navbar-brand" onClick={handleHome} style={{fontSize: 25, cursor: 'pointer'}}>Pet Paws</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto navbar-brand" style={{margin: 'auto'}} >
            <li className="nav-item active">
              <a className="nav-link" onClick={handleAbout} style={{cursor: 'pointer'}}>Sobre</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" onClick={handleOngs} >ONGs</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" onClick={handleContact} style={{cursor: 'pointer'}}>Contato</a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" onClick={handleDonations} style={{cursor: 'pointer'}}>Doações</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {/* <div className="input-group">
              <input className="form-control" style={{width: 300, height: 45}} type="search" placeholder="Buscar pets" aria-label="Search" />
              <Search size={30} color="rgb(110, 110, 110)" className='mr-sm-5' />
            </div> */}

            <div className="mr-sm-5 input-group" style={{outline: 0}}>
              {/* <input id='tiraOutline' className="form-control border-right-0" style={{borderTopLeftRadius: 7, borderBottomLeftRadius: 7, width: 300, height: 45}} type="text" placeholder="Buscar pets" aria-label="Search" /> */}
              <Inputizinho />
              <span className="input-group-append bg-white border-left-0" style={{borderTopRightRadius: 7, borderBottomRightRadius: 7}}>
                  <span className="input-group-text bg-transparent"style={{borderTopRightRadius: 7, borderBottomRightRadius: 7}} >
                  <Search size={25} color="rgb(155, 155, 155)" />
              </span>
              </span>
            </div>
          </form>
        </div>
    </nav>
    </div>
  );
}

export default Header;