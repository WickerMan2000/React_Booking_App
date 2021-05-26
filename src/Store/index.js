import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialPriceSliderState = { price: 0 };

const sliderPriceSlice = createSlice({
    name: 'slider',
    initialState: initialPriceSliderState,
    reducers: {
        changeValue: (state, action) => {
            state.price = action.payload;
        }
    }
});

const store = configureStore({
    reducer: { slider: sliderPriceSlice.reducer }
})

export default store;
export const sliderPriceActions = sliderPriceSlice.actions;