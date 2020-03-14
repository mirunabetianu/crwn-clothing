import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

//import './cart-dropdown.styles.scss';
import {CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton} from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {withRouter} from 'react-router-dom';

const CartDropdown = ({cartItems,history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                )))
                :
                (<EmptyMessageContainer className='empty-cart'>Your shopping cart is empty</EmptyMessageContainer>)
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => 
                {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));