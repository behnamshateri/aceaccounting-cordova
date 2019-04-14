import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { FirstCheckLogin } from "./Actions";
import reducer from "./Reducers";
import {createLogger} from 'redux-logger'
import { HashRouter, BrowserRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {languages} from "./Languages";
import './i18n';
import dotnetify from "dotnetify";

dotnetify.hubServerUrl = "https://devdash.aceaccounting.nl";



const middleware = [thunk];
middleware.push(createLogger());
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(FirstCheckLogin(languages , {defaultLanguage:'en'}));


// export default class Test extends react.Component{
//     render(){
//         return(
//             <div>sdfsfsefsefsegseg</div>
//         )
//     }
// }



const startApp = () => {
    render(
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>,
        document.getElementById('App')
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
};

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
