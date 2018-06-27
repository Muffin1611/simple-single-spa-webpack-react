import * as singleSpa from 'single-spa';

singleSpa.registerApplication('react-navbar', () =>
    import ('../navbar/app.js'), () => true);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}