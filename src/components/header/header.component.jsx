import React from 'react';

import {Link} from 'react-router-dom';

import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import {CartDropdown} from '../../components/cart-dropdown/cart-dropdown.component';
import {selectHidden, selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser,hidden,cartItems}) => (
    <div className='header'>
        <Link className='logo-container' to="/" >
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className ='option' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to="/signin">SIGN IN</Link>
            }
            <CartIcon></CartIcon>
        </div>
        
        {
            hidden ? null:
            <CartDropdown cartItems={cartItems}></CartDropdown>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(Header);