import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'netrecipes',
      storage,
      whitelist: ['auth', 'user', 'theme'],
    },
    reducers
  );

  return persistedReducer;
};
