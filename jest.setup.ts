import 'raf/polyfill'; // requestAnimationFrame() required by react v16+
import 'jest';
import { setIconOptions } from 'office-ui-fabric-react/lib/Styling';
import * as _Window from './node_modules/jsdom/lib/jsdom/browser/Window';
import './src/shared/localization/i18n';
const enzyme: any = require('enzyme'); // tslint:disable-line: no-any
const Adapter: any = require('enzyme-adapter-react-16'); // tslint:disable-line: no-any
global['Headers'] = ()=>{};
window.parent.fetch = jest.fn();
// Suppress icon warnings.
setIconOptions({
  disableWarnings: true
});

enzyme.configure({ adapter: new Adapter() });
window.parent.postMessage = jest.fn();  // portalEnvironmentService
window.parent.addEventListener = jest.fn(); // portalEnvironmentService
window.parent.document.execCommand = jest.fn();
// jest.mock('react-i18next', () => ({
//   // this mock makes sure any components using the translate HoC receive the t function as a prop
//   useTranslation: () => Component => {
//     Component.defaultProps = { ...Component.defaultProps, t: () => '' };
//     return Component;
//   },
// }));

// jest.mock('moment', () => {
//   // UTC everywhere
//   const moment = require.requireActual('moment');
//   moment.utc.duration = moment.duration;
//   return moment.utc;
// });
