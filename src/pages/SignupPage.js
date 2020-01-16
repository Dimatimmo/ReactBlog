import React from 'react';
import Auth from '../components/auth/Auth';

export default class SignUpPage extends React.Component {

    render() {
        return (
            <div className="auth-page">
                <h1>Sign up</h1>
                <Auth type="signup"></Auth>
            </div>
        )
    }
}