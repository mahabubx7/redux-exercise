import counterReducer from './features/counterSlice';
import albumReducer from './features/albumSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    counter: counterReducer,
    albums: albumReducer,
  },
});

export default store;
