import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../files/lf30_editor_hfvoq0ag.json'
export default function RegistrationSuccess() {
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return (
        <div>
            <Lottie
                options={defaultOptions} 
                height={100}
                width={100}
            />
            hello
        </div>
    )
}