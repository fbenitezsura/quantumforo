import { createSlice } from "@reduxjs/toolkit";

export const SIDEBAR_TYPES = {
    CART_SIDEBAR: "CART_SIDEBAR",
    SEARCH_SIDEBAR: "SEARCH_SIDEBAR",
    WISHLIST_SIDEBAR: "WISHLIST_SIDEBAR",
    FILTERS_SIDEBAR: "FILTERS_SIDEBAR",
    MENU_ACCOUNT_MOBILE: "MENU_ACCOUNT_MOBILE",
    MENU_MOBILE: "MENU_MOBILE"
};    

const initialState = {
    sidebarType: null,
    isOpen: false,
    sidebarProps: {}
}

export const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        showSidebar: (state, action) => { 
            state.isOpen = true;
            state.sidebarType = SIDEBAR_TYPES[action.payload];
        },
        hideSidebar: () => initialState
    },
})

export const { showSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer