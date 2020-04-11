import React, { useState } from 'react';

import './sign-in.styles.scss';

import '../form-input/form-input.component'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    const {email, password} = userCredentials;
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in  with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name="email"
                    value={email}
                    required
                    handleChange={handleChange}
                    label="email"
                >
                </FormInput>

                <FormInput
                    type='password'
                    name="password"
                    value={password}
                    required
                    handleChange={handleChange}
                    label="password">
                </FormInput>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    );

}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
