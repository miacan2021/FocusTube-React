import './index.css'
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import Home from './Home'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <Home />
    </PersistGate>
  </Provider>
,
  document.getElementById('root')
);
