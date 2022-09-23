import Placehodler from './transitions/default.js';
import Highway from '@dogstudio/highway';
import Tween from 'gsap';

class SwipeRight extends Highway.Transition {
    in({ from, to, done }) {

        window.scrollTo(0, 0);

        Tween.fromTo(from,
            { left: "0%" },
            {
                left: "-100%",
                ease: "power4.out",
                duration: 1,
            }
        );

        Tween.fromTo(to,
            { right: "-100%" },
            {
                right: "0%",
                ease: "power4.out",
                duration: 1,
                onComplete: function () {
                    from.remove();
                    done();
                }
            },
        );;

    }

    out({ from, done }) {

        done();
    }
}

class SwipeLeft extends Highway.Transition {
    in({ from, to, done }) {

        window.scrollTo(0, 0);

        Tween.fromTo(from,
            { right: "0%" },
            {
                right: "-100%",
                ease: "power4.out",
                duration: 1,
            }
        );

        Tween.fromTo(to,
            { left: "-100%" },
            {
                left: "0%",
                ease: "power4.out",
                duration: 1,
                onComplete: function () {
                    from.remove();
                    done();
                }
            },
        );;

    }

    out({ from, done }) {

        done();
    }
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
