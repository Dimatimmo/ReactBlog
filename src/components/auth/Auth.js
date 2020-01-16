import React from 'react';
import AuthSignin from './AuthSignin';
import AuthSignup from './AuthSignup';

export default class Auth extends React.Component {

    renderComponentFromProps = () => {
        let component;
        
        if (this.props.type === 'signin') {
            component = <AuthSignin></AuthSignin>
        } else if (this.props.type === 'signup') {
            component = <AuthSignup></AuthSignup>
        }

        return component;
    }

    render() {
        return(
            <div className="auth">
                <div className="form-holder">
                    { this.renderComponentFromProps() }
                </div>
            </div>
        )
    }
}