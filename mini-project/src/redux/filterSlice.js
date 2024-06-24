import { createSlice } from "@reduxjs/toolkit";

const filterSlice  = createSlice({
    name:"filter",
    initialState:{filterProducts:[],categoryvalue:'',searchvalue:''},
    reducers:{
        FILTER_BY_CATEGORY(state,action){
            // console.log(action.payload)
            let {Products,category}=action.payload
            if(category !=''){
                let fp = Products.filter(items => items.category==category)
                state.filterProducts = fp
                state.categoryvalue = category
            }
        },
        FILTER_BY_SEARCH(state,action){
            let {Products,search}=action.payload
            if(search !=''){
                let fp = Products.filter(items => items.name.includes(search) || items.category.toLowerCase().includes(search.toLowerCase()))
                state.filterProducts = fp
                state.searchvalue = search
            }
        }
    }
})

export const {FILTER_BY_CATEGORY,FILTER_BY_SEARCH}=filterSlice.actions

export default filterSlice
export const selectFilters = state=>state.filter.filterProducts
export const selectCategory = state=>state.filter.categoryvalue
export const selectSearch = state=>state.filter.searchvalue