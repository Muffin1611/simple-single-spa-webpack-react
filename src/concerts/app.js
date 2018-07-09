import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Concerts from './concerts.component.js';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Concerts,
    domElementGetter: () => document.getElementById('react-concerts')
});

export function bootstrap(props) {
    return reactLifecycles.bootstrap(props);
}

export function mount(props) {
    return reactLifecycles.mount(props);
}

export function unmount(props) {
    return reactLifecycles.unmount(props);
}