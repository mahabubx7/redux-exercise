import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getAlbums = createAsyncThunk('album/get', async () => {
  const albums = await fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return albums;
});

export const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(getAlbums.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAlbums.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload.slice(0, 5);
    });
    builder.addCase(getAlbums.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

// export const { getAlbums } = albumSlice.actions;

export default albumSlice.reducer;
