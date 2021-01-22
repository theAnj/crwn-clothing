import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector (
    [selectCart],
    (cart => cart.CartItems)
);

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    CartItems => CartItems.reduce (
        (accQty , cartItem)=> accQty + cartItem.quantity , 0
    )
)