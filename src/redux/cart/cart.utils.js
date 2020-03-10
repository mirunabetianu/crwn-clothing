export const addItemToCard = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem)
    {
        return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity:cartItem.quantity + 1}
                :
                cartItem
            )
    }

    return [...cartItems,{...cartItemToAdd, quantity: 1}]
};

export const decreaseQuantity = (cartItems, cartQuantityToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartQuantityToDecrease.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartQuantityToDecrease.id);
    }else{
        return cartItems.map(cartItem => cartItem.id === cartQuantityToDecrease.id ?
                                
                                    {...cartItem, quantity: cartItem.quantity -1}
                                    :
                                    cartItem
                            )
    }
}