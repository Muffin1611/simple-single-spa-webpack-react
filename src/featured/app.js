import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Featured from './featured.component.js';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Featured,
    domElementGetter: () => document.getElementById('react-featured')
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
