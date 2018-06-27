import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Footer from './footer.component.js';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Footer,
    domElementGetter,
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

function domElementGetter() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('react-footer');
    if (!el) {
        el = document.createElement('div');
        el.id = 'react-footer';
        document.body.appendChild(el);
    }

    return el;
}