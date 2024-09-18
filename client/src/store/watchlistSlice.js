import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: [],
    reducers: {
        handleAdd(state, action){
            const newState = [...state];
            newState.push(action.payload);
            return newState;
        },
        handleRemove(state, action){
            const newState = [...state];
            const findIndex = (arr, id) => arr.findIndex((item) => item.id === id);
            const index = findIndex(newState, action.payload.id);
            console.log(index);
            if(index !== -1){
                newState.splice(index, 1);
            }
            return newState;

            // const getIndex = (element, array) =>
            //     array.findIndex(
            //       (obj) => JSON.stringify(obj) === JSON.stringify(element)
            //     );
            //   const indexOfRemoveingCoin = getIndex(action.payload, state);
            //   return state.slice(0, indexOfRemoveingCoin);
        }
    }
})

export const { handleAdd, handleRemove } = watchlistSlice.actions;
export default watchlistSlice.reducer;