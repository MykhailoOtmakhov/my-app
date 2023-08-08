import ReactDOM from 'react-dom/client';
import * as React from "react";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "./store/reducer";

const store: Store<NoteState, NoteAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const rootElement = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  rootElement.render(
    <React.StrictMode>
      <Provider store={store}>
       <App />
      </Provider>
   </React.StrictMode>
   );