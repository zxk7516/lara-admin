// app.js

require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom'

import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';

render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Master}/>
            <Route path="/add-item" component={CreateItem}/>
            <Route path="/display-item" component={DisplayItem} />
        </div>
    </BrowserRouter>,
    document.getElementById('example'));