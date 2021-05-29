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
const initialFilterState = { filter: 'All', city: 'Paris', roomtype: 'All' };
const initialDealWithMapState = { condition: false, map: '', identity: 0, checkIdentity: 0 };

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
        chooseFilter: (state, action) => {
            state.filter = action.payload;
        },
        chooseCity: (state, action) => {
            state.city = action.payload;
        },
        chooseRoomType: (state, action) => {
            state.roomtype = action.payload;
        },
    }
});

const dealWithMapSlice = createSlice({
    name: 'map',
    initialState: initialDealWithMapState,
    reducers: {
        changeCondition: (state, action) => {
            state.condition = action.payload.condition;
            state.map = action.payload.map;
            state.identity = action.payload.id;
            state.checkIdentity = action.payload.checkId;
            
        }
    }
});

const store = configureStore({
    reducer: {
        slider: priceSliderSlice.reducer,
        searcher: searchedTextSlice.reducer,
        calendar: calendarSlice.reducer,
        filters: filterSlice.reducer,
        map: dealWithMapSlice.reducer
    }
});

export const priceSliderActions = priceSliderSlice.actions;
export const searchedTextActions = searchedTextSlice.actions;
export const calendarActions = calendarSlice.actions;
export const filterActions = filterSlice.actions;
export const mapActions = dealWithMapSlice.actions;
export default store;