import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialDate = new Date();
const defaultDate = initialDate.getFullYear() + "-" + (initialDate.getMonth() + 1) + "-" + initialDate.getDate();

const initialPriceSliderState = { price: 2000 };
const initialSearchedTextState = { text: [], flag: false };
const initialCalendarState = {
    enabled: false,
    checkInDates: defaultDate,
    checkOutDates: defaultDate,
    checkInOutDates: {
        checkIn: defaultDate,
        checkOut: defaultDate
    },
    readyForDeal: false
};
const initialFilterState = { filter: 'All', city: 'Paris', roomtype: 'All' };
const initialDealWithMapState = { condition: false, map: '', identity: 0, isUnmounted: false, flag: false };
const initialSummaryDataState = { image: '', hotelName: '', price: 0, city: '' };
const inititialSummaryViewState = { show: false };
const initialHintState = { hint: false };

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
            state.text = action.payload.result;
            state.flag = action.payload.flag;
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
                state.checkInOutDates.checkOut = action.payload.inputCheck;
            }
            state.enabled = action.payload.enable;
            state.checkInDates = action.payload.inputCheck;
            state.checkInOutDates.checkIn = action.payload.inputCheck;
            if (state.checkInOutDates.checkIn !== defaultDate && state.checkInOutDates.checkOut !== defaultDate) {
                state.readyForDeal = true;
            } else {
                state.readyForDeal = false;
            }
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
            if (state.checkInOutDates.checkIn !== defaultDate && state.checkInOutDates.checkOut !== defaultDate) {
                state.readyForDeal = true;
            } else {
                state.readyForDeal = false;
            }
        },
        reset: (state, action) => {
            state.enabled = false;
            state.checkInDates = defaultDate;
            state.checkOutDates = defaultDate;
            state.checkInOutDates.checkIn = defaultDate;
            state.checkInOutDates.checkOut = defaultDate;
            state.readyForDeal = action.payload.ready;
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
            state.isUnmounted = action.payload.unmount;
            state.flag = !state.flag;
        }
    }
});

const summarySlice = createSlice({
    name: 'summary',
    initialState: inititialSummaryViewState,
    reducers: {
        summary: state => {
            state.show = !state.show;
        }
    }
});

const hintSlice = createSlice({
    name: 'hint',
    initialState: initialHintState,
    reducers: {
        showHint: (state, action) => {
            state.hint = action.payload;
        }
    }
});

const summaryDataSlice = createSlice({
    name: 'summaryData',
    initialState: initialSummaryDataState,
    reducers: {
        showSummaryData: (state, action) => {
            state.city = action.payload.city;
            state.hotelName = action.payload.hotelName;
            state.image = action.payload.image;
            state.price = action.payload.price;
        }
    }
});

const store = configureStore({
    reducer: {
        slider: priceSliderSlice.reducer,
        searcher: searchedTextSlice.reducer,
        calendar: calendarSlice.reducer,
        filters: filterSlice.reducer,
        map: dealWithMapSlice.reducer,
        summary: summarySlice.reducer,
        hint: hintSlice.reducer,
        summaryData: summaryDataSlice.reducer,
    }
});

export const priceSliderActions = priceSliderSlice.actions;
export const searchedTextActions = searchedTextSlice.actions;
export const calendarActions = calendarSlice.actions;
export const filterActions = filterSlice.actions;
export const mapActions = dealWithMapSlice.actions;
export const summaryActions = summarySlice.actions;
export const hintActions = hintSlice.actions;
export const summaryDataActions = summaryDataSlice.actions;
export default store;