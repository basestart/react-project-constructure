import React from 'react';
import {Route} from 'react-router-dom';

export default ({modules}) => {
    console.log(modules);
    let keys = Object.keys(modules);
    return keys.map(key => <Route key={key} path={`/key`} component={modules[key]}/>)
}