import counterReducer from './features/counterSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
