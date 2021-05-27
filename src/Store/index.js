import { configureStore, createSlice } from '@reduxjs/toolkit';

const inititalDate = new Date();

const initialPriceSliderState = { price: 0 };
const initialSearchedTextState = { text: [] };
const initialCalendarState = {
    enabled: false,
    checkInDates: inititalDate,
    checkOutDates: inititalDate,
    checkInOutDates: {
        checkIn: inititalDate,
        checkOut: inititalDate
    }
};
const initialFilterState = { filter: 'Car Park' };

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
    initialState: initialSearchedTextState,
    reducers: {
        searchText: (state, action) => {
            state.text = action.payload;
        }
    }
});

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: initialCalendarState,
    reducers: {
        checkIn: (state, action) => {
            if (action.payload.inputCheck > state.checkOutDates) {
                state.enabled = action.payload.enable;
                state.checkOutDates = action.payload.inputCheck;
                state.checkInDates = state.checkOutDates;
                state.checkInOutDates.checkOut = action.payload.inputCheck
            }
            state.enabled = action.payload.enable;
            state.checkInDates = action.payload.inputCheck;
            state.checkInOutDates.checkIn = action.payload.inputCheck
        },
        checkOut: (state, action) => {
            if (action.payload.inputCheck < state.checkInDates) {
                state.enabled = action.payload.enable;
                state.checkInDates = action.payload.inputCheck;
                state.checkOutDates = state.checkInDates;
                state.checkInOutDates.checkIn = action.payload.inputCheck
            }
            state.enabled = action.payload.enable;
            state.checkOutDates = action.payload.inputCheck;
            state.checkInOutDates.checkOut = action.payload.inputCheck
        }
    }
});

const filterSlice = createSlice({
    name: 'filters',
    initialState: initialFilterState,
    reducers: {
        choose: (state, action) => {
            state.filter = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        slider: priceSliderSlice.reducer,
        searcher: searchedTextSlice.reducer,
        calendar: calendarSlice.reducer,
        filters: filterSlice.reducer
    }
});

export const priceSliderActions = priceSliderSlice.actions;
export const searchedTextActions = searchedTextSlice.actions;
export const calendarActions = calendarSlice.actions;
export const filterActions = filterSlice.actions;
export default store;