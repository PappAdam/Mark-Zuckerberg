import Highway from '@dogstudio/highway';
import Tween from 'gsap';

class SwipeTransition extends Highway.Transition {
    
    in({from, to, trigger, done}){

        // Reset Scroll
        window.scrollTo(0, 0);

        // Remove Old View
        from.remove();

        // Animation    
        Tween.duration(to, 0.5,
            { opacity: 0 },
            {
              opacity: 1,
              onComplete: done
            }
          );
    }

    out({from, trigger, done}){

        // Animation
        Tween.duration(from, 0.5,
           { opacity: 1 },
           {
             opacity: 0,
             onComplete: done
           }
         );
    }
}

class LenzRenderer extends Highway.Renderer {
    // Hooks/methods
    onEnter() { ;

     }
    onLeave() { 

     }
    onEnterCompleted() { 

     }
    onLeaveCompleted() { 

     }
  }

const H = new Highway.Core({
    renderers: {
        name: LenzRenderer
    },
    transition: {
        name: SwipeTransition
    }
})