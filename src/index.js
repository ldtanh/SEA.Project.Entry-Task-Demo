import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

import App from "./components/App.js";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import ActivityDetail from './components/Activity/ActivityDetail.js';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
           <div>
               <Switch>
                   <Route path='/login' component={Login}/>
                   <Route path='/' component={Main}/>
                   <Route path='/activity/:id' component={ActivityDetail}/>
               </Switch>
               <App isAuth={false}/>
           </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);