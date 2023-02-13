import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { food: [], totalItem: 0, isValidCard: false };

const sliceStore = createSlice({
  name: "thali",
  initialState,
  reducers: {
    // increment(state, action) {

    //   state.totalItem++;
    // },
    // decrement(state, action) {
    //   state.totalItem--;
    // },

    addtoCart(state, action) {
      state.totalItem++;
      const newItem = action.payload;
      const previousValue = state.food.find((match) => {
        return match.id === newItem.id;
      });

      if (!previousValue) {
        state.food.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        previousValue.quantity++;
        previousValue.totalPrice = previousValue.totalPrice + newItem.price;
      }
    },
    removeCart(state, action) {
      state.totalItem--;
      let newItem = action.payload;
      let previousValue = state.food.find((match) => {
        return match.id === newItem.id;
      });
      if (previousValue.quantity < 2) {
        alert("Add Items Now");
        state.food = state.food.filter((item) => item.id !== newItem.id);
      } else {
        previousValue.quantity--;
        previousValue.totalPrice = previousValue.totalPrice - newItem.price;
      }
    },

    orderPage(state) {
      state.totalItem = 0;
      state.food = [];
      state.isValidCard = false;
    },
    hideCard(state) {
      state.isValidCard = true;
    },
  },
});
const store = configureStore({
  reducer: sliceStore.reducer,
});
export const actionSlice = sliceStore.actions;
export default store;
