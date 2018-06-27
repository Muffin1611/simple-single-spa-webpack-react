import * as singleSpa from 'single-spa';

singleSpa.registerApplication('react-navbar', () =>
    import ('../navbar/app.js'), () => true);

singleSpa.registerApplication('react-featured', () =>
    import ('../featured/app.js'), () => true);

singleSpa.registerApplication('react-concerts', () =>
    import ('../concerts/app.js'), () => true);

singleSpa.registerApplication('react-footer', () =>
    import ('../footer/app.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}