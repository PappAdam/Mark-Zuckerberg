import Placehodler from './transitions/default.js';
import Highway from '@dogstudio/highway';
import { SwipeRight, SwipeLeft } from './transitions/swipe.js';

let load = 0;

const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
);

if (pageAccessedByReload === true) {
    window.location.replace('http://localhost:1234/index.html');
}


const H = new Highway.Core({

    transitions: {
        default: Placehodler,
        contextual: {
            swipe_r: SwipeRight,
            swipe_l: SwipeLeft
        }
    }
});



