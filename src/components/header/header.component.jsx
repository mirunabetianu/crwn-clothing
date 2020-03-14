import React from 'react';

//import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {selectHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {OptionLink, OptionsContainer, HeaderContainer, LogoContainer} from './header.styles';

const Header = ({currentUser,hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer> 
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={()=> auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon></CartIcon>
        </OptionsContainer>
        
        {
            hidden ? null:
            <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden,
})

export default connect(mapStateToProps)(Header);