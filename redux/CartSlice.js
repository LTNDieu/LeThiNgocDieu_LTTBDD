const { createSlice } = require("@reduxjs/toolkit");

const cartslice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, actions) => {
            const isAvailable = state.find(
                (value) => value.title == actions.payload.title
            );
            if (isAvailable) {
                actions.payload["quantity"] += 1;
            } else {
                state.push({ ...actions.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, actions) => {
            const newList = state.filter(
                (value) => value.title != actions.payload.title
            );
            return (state = newList);
        },
        incrementQuantity: (state, actions) => {
            const isAvailable = state.find(
                (value) => value.title == actions.payload.title
            );
            if (isAvailable) {
                isAvailable.quantity++;
            } else {
                console.log("not available")
            }
        },
        decrementQuantuty: (state, actions) => {
            const isAvailable = state.find(
                (value) => value.title == actions.payload.title
            );
            if (isAvailable.quantity == 1) {
                isAvailable.quantity = 1
            } else {
                isAvailable.quantity--;
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantuty,
} = cartslice.actions;

export default cartslice.reducer;