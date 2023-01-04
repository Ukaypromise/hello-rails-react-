import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api_data = 'http://localhost:3000/api/message';

export const getMessage = createAsyncThunk('greetings/getGreetings', 
async () => {
  const response = await fetch(api_data);
  const answer = await response.json();
  return answer;
});

const initialState = {
  message: [],
  status: 'idle',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMessage.fulfilled, (state, action) => { state.status = 'succeeded'; state.message = action.payload; });
  },
});


export default greetingsSlice.reducer;
