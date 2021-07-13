import React, { useState } from 'react';
import Registration from './Registration';
import RegistrationSuccess from './RegistrationSuccess';

export default function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm () {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? (<Registration submitForm={submitForm}/>) : <RegistrationSuccess />}
            {/* <RegistrationSuccess /> */}
        </div>
    )
};