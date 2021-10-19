import React, { useState } from 'react';
import { useSpring,animated } from 'react-spring';


const Extra = () => {
    const [flip, set] = useState(false);
    return (
        <div>
            <p className="mt-5 text-muted">Welcome to Aged Healthcare</p>
            <animated.div style={useSpring({ 
                  to: { opacity: 1 },
                  reset: true,
                  reverse: flip,
                  delay: 100, 
                  onRest: () => set(!flip),
                  from: { opacity: 0 } 
                  })}><h1><span className="text-info">We make a</span><span className="text-muted"> Difference </span><span className="text-success">in your lives</span></h1></animated.div>
            
            <p>It is difficult to pinpoint the exact age when an adult becomes a geriatric patient.  It is a gradual process that enforces the need for some kind of support by family or medical staff without which, the patient may be worse off.</p>
        </div>
    );
};

export default Extra;