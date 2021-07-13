import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../files/lf30_editor_hfvoq0ag.json'


export default function RegistrationSuccess() {
    const history = useHistory();
    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    useEffect(() => {
        setTimeout(() => history.push('/'), 1250)
    })
    
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