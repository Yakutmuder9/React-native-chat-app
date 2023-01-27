import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers", async () => {
        const response = await fetch('baseUrl' + 'users');
        return response.json()
    }
);

const usersSlice = createSlice({
    name: 'mySlice',
    initialState: {},
    reducers: {
        increment: state => {
            state.count += 1;
        },
    },
    extra: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
            });
    },
});

export const usersReducer = usersSlice.reducer;