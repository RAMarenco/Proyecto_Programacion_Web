import RegisterForm from './../../components/RegisterForm/RegisterForm';
import RegisterFormStep2 from '../../components/RegisterForm/RegisterFormStep2';
import React, { useState } from 'react';

const Register = () => {
    const [state, setState] = useState({
        step: 1,
        user: "",
        name: "",
        lastname: "",
        email: "",
        birthdate: "",
        gender: "",
        password: "",
        confirmPassword: ""
    });

    const [step, setStep] = useState(1);
    const {user, name, lastname, email, birthdate, gender, password, confirmPassword} = state;
    const values = {user, name, lastname, email, birthdate, gender, password, confirmPassword};

    // Next step
    const nextStep = () => {
        setStep(step + 1);
    }

    // Previous step
    const prevStep = () => {
        setStep(step - 1);
    }

    // Handle fields change
    const handleChange = (input) => (e) => {
        //console.log(e.target);
        state[input] = e.target.value;
        console.log({state});
    }

    switch(step) {
        case 1:
            return (
                <RegisterForm 
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <RegisterFormStep2 
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={values}
                />
            )
    }
}

export default Register;