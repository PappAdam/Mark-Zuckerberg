import Placehodler from './transitions/default.js';
import Highway from '@dogstudio/highway';
import { SwipeRight, SwipeLeft } from './transitions/swipe.js';

const H = new Highway.Core({
    transitions: {
        default: Placehodler,
        contextual: {
            swipe_r: SwipeRight,
            swipe_l: SwipeLeft
        }
    }
});
