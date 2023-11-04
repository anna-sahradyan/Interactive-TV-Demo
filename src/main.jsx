import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {StateProvider} from "./provider/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <StateProvider>
    <App />
    </StateProvider>
</BrowserRouter>
)
