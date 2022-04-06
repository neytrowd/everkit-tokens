import React, {useState} from 'react'
import './App.scss'
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./pages/app-router";
import {Provider} from "react-redux";
import {store} from './store'

function App() {

    return (
        <div>
            <Provider store={store}>
                <Router>
                    <AppRouter/>
                </Router>
            </Provider>
        </div>
    )
}

export default App
