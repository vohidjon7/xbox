import React, { useState } from 'react'
import logo from './logo2.jpg'
import './navbar.css'

export default function Navbar({ getLimit,getValue, getChange }) {
    
    const [search,setSearch] = useState('')

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo}alt="logo" className='logo1' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Config details
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text" href="#"  onClick={()=>getLimit(15)}>15</a></li>
                                    <li><a className="dropdown-item text" href="#"  onClick={()=>getLimit(30)}>30</a></li>
                                    <li><a className="dropdown-item text" href="#"  onClick={()=>getLimit(45)}>45</a></li>
                                    <li><a className="dropdown-item text" href="#"  onClick={()=>getLimit(60)}>60</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item text" href="#"  onClick={()=>getLimit(126)}>Unlimited</a></li>
                                </ul>
                            </li>
                            <li>
                                <i className='material-icons icn' onClick={()=>getChange('shop')}>add_shopping_cart</i>
                                <i className='material-icons icn' onClick={()=>getChange('card')}>archive</i>
                            </li>
                        </ul>
                        <div className="d-flex" >
                            <input className="form-control me-2" type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                            <button className="btn btn-outline-warning" type="submit" onClick={()=>getValue(search)}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
