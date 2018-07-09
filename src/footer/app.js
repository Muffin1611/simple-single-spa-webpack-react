import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Footer from './footer.component.js';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Footer,
    domElementGetter: () => document.getElementById('react-footer')
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

