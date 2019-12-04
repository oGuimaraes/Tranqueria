import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchAppBar from './SearchAppBar'
import Button from './Button'
import {Link} from 'react-router-dom'
import {DropdownButton} from 'react-bootstrap'
import DropdownItem from './DropdownItem'
import { connect } from 'react-redux';


export class Header extends Component {
   
    render() {
        const {cart} = this.props;
        return (
            <div>
                <SearchAppBar />
            <div>
            <div className="search-bar-mobile">
                <SearchBar />
            </div>
                <div id = "headerTop">
                    {/* <img src={logoImg} alt="logo"></img> */}
                    <Link to="/" style={{textDecoration:'none',color:'white'}}><h1 id="siteName">Tranqueiria</h1></Link>
                    <SearchBar to="/search"/>
                    <Button to="/cart" title={`Carrinho (${cart.length}) `}/>
                    <Button to="/login" title="Entrar"/>
                    
                </div>
                <div class="header-bot" id="headerBot">
                    <DropdownButton id="dropdown-button" title="Grupo 1">
                        <DropdownItem to="/" title="a"/>
                        <DropdownItem to="/" title="b"/>
                        <DropdownItem to="/" title="c"/>
                    </DropdownButton>
                    <DropdownButton id="dropdown-button" title="Grupo 2">
                        <DropdownItem to="/" title="a"/>
                        <DropdownItem to="/" title="b"/>
                        <DropdownItem to="/" title="c"/>
                    </DropdownButton>
                    <DropdownButton id="dropdown-button" title="Grupo 3">
                        <DropdownItem to="/" title="a"/>
                        <DropdownItem to="/" title="b"/>
                        <DropdownItem to="/" title="c"/>
                    </DropdownButton>
                    <DropdownButton id="dropdown-button" title="Grupo 4">
                        <DropdownItem to="/" title="a"/>
                        <DropdownItem to="/" title="b"/>
                        <DropdownItem to="/" title="c"/>
                    </DropdownButton>
                    <DropdownButton id="dropdown-button" title="Grupo 5">
                        <DropdownItem to="/" title="a"/>
                        <DropdownItem to="/" title="b"/>
                        <DropdownItem to="/" title="c"/>
                    </DropdownButton>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
  mapStateToProps
)(Header);


