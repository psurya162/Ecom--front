import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addtoCart: (state, action) => {
            const { id, name, image, price } = action.payload;
            const find = state.cart.findIndex(item => item.id === id);
            if (find !== -1) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push({ id, name, image, price, quantity: 1 });
            }
        },
        getCartTotal: (state) => {
            const { totalPrice, totalQuantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                { totalPrice: 0, totalQuantity: 0 }
            );

            return {
                ...state,
                totalPrice: parseInt(totalPrice.toFixed(2)),
                totalQuantity: totalQuantity,
            };
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },

    }
});

export const { setItems, addtoCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity, } = cartSlice.actions;

export default cartSlice.reducer;
