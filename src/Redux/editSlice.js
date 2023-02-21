import { createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
    name: "Edit Expenditure",
    initialState: {
        editFormOpened: false,
        editExp: []
    },

    reducers: {
        startEdit: (state, action) => {
            console.log(action.payload.editItem);
            state.editFormOpened = true;
            state.editExp = action.payload.editItem;
        },
        closeEdit: (state) => {
            state.editFormOpened = false;
            state.editExp = [];
        }
    }
})

export const { startEdit, closeEdit } = editSlice.actions;

export default editSlice.reducer;