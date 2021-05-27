import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialPriceSliderState = { price: 0 };
const initialSearchedText = { text: [] };

const priceSliderSlice = createSlice({
    name: 'slider',
    initialState: initialPriceSliderState,
    reducers: {
        changeValue: (state, action) => {
            state.price = action.payload;
        }
    }
});

const searchedTextSlice = createSlice({
    name: 'searcher',
    initialState: initialSearchedText,
    reducers: {
        searchText: (state, action) => {
            state.text = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        slider: priceSliderSlice.reducer,
        searcher: searchedTextSlice.reducer,
    }
})

export const priceSliderActions = priceSliderSlice.actions;
export const searchedTextActions = searchedTextSlice.actions;
export default store;