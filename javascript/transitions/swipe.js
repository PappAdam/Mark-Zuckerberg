import Highway from '@dogstudio/highway';
import Tween from 'gsap';
import { swipe_direction } from '.././navbar/position.js';

export class SwipeRight extends Highway.Transition {
    in({ from, to, done }) {

        window.scrollTo(0, 0);

        Tween.fromTo(from,
            { left: "0%" },
            {
                left: "-100%",
                ease: "power4.out",
                duration: 1.5,
            }
        );

        Tween.fromTo(to,
            { right: "-100%" },
            {
                right: "0%",
                ease: "power4.out",
                duration: 1.5,
                onComplete: function () {
                    swipe_direction();
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

export class SwipeLeft extends Highway.Transition {
    in({ from, to, done }) {

        window.scrollTo(0, 0);

        Tween.fromTo(from,
            { right: "0%" },
            {
                right: "-100%",
                ease: "power4.out",
                duration: 1.5,
            }
        );

        Tween.fromTo(to,
            { left: "-100%" },
            {
                left: "0%",
                ease: "power4.out",
                duration: 1.5,
                onComplete: function () {
                    swipe_direction();
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


