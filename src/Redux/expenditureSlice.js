import { createSlice } from '@reduxjs/toolkit';

export const expenditureSlice = createSlice({
    name: "Limit",
    initialState: {
        deleteConfirm: false,
        deleteId: null,
        expData: [
            {
                id: 1,
                name: 'Cat food',
                desc: 'Took some cat food from the supermarket down the road',
                spent: '10',
                type: 'HM',
                created_at: '2023-02-19'
            },
            {
                id: 2,
                name: 'Bukowski',
                desc: 'Finaly bought that Bukowski book I wanted',
                spent: '46',
                type: 'MC',
                created_at: '2023-02-19'
            },
            {
                id: 3,
                name: 'Parking ticket',
                desc: 'Got a parking ticket today, cheeky cunt.',
                spent: '250',
                type: 'TR',
                created_at: '2023-02-19'
            },
            {
                id: 4,
                name: 'Groceries',
                desc: 'Went to that new supermaket on Borat street',
                spent: '422',
                type: 'FD',
                created_at: '2023-02-19'
            },
            {
                id: 5,
                name: 'Payed the gas',
                desc: '',
                spent: '81',
                type: 'BL',
                created_at: '2023-02-19'
            },
            {
                id: 6,
                name: 'Bought some cake',
                desc: 'Yea, well what can you do about it.',
                spent: '250',
                type: 'FD',
                created_at: '2023-02-19'
            },
            {
                id: 7,
                name: 'Bought a game',
                desc: 'Was on a discount.',
                spent: '140',
                type: 'MC',
                created_at: '2023-02-19'
            }
        ]
    },

    reducers: {
        createData: (state, action) => {
            let newItem = action.payload.newElement;

            return {
                expData: [ ...state.expData, newItem],
            }
        },

        updateData: (state, action) => {
            let originalElements = [...state.expData];
            let incomingFile = action.payload.updatedElelemnt;
            let indexUpdate = originalElements.indexOf(originalElements.filter(el => el.id === incomingFile.id)[0]);
            originalElements.splice(indexUpdate, 1, incomingFile);

            state.expData = originalElements;
            
        },

        deleteData: (state, action) => {
            let existingItems = state.expData
            let remaningItems = existingItems.filter((el) => el.id !== action.payload.deleteId);

            return {
                expData: remaningItems
            }
        }
    }
})

export const { createData, updateData, deleteData } = expenditureSlice.actions;

export default expenditureSlice.reducer;