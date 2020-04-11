import React, { useState } from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = userCredentials;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    const { displayName, email, password, confirmPassword } = userCredentials;
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                >
                </FormInput>

                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                >
                </FormInput>

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                >
                </FormInput>

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                >
                </FormInput>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);