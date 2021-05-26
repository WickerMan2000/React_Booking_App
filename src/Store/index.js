import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialPriceSliderState = { price: 0 };
const initialSearchedText = { text: [] };
const initialMapState = { mapUrl: '' }

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

const mapSlice = createSlice({
    name: 'map',
    initialState: initialMapState,
    reducers: {
        showingMap: (state, action) => {
            state.mapUrl = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        slider: priceSliderSlice.reducer,
        searcher: searchedTextSlice.reducer,
        map: mapSlice.reducer
    }
})

export const priceSliderActions = priceSliderSlice.actions;
export const searchedTextActions = searchedTextSlice.actions;
export const mapRelatedActions = mapSlice.actions;
export default store;