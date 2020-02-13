import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';
import { setStack } from './actions';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState())); // subscribe will fire soem code whenever the store updates so it will be very convenient
store.dispatch(setStack({id: 0, title:'example', cards: []})); //dispatch an action

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);