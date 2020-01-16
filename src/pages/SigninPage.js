
import React from 'react';
import Auth from '../components/auth/Auth';

export default class Signinpage extends React.Component {

  render() {
    return(
      <div className="auth-page">
          <h1>Sign in</h1>
          <Auth type="signin"></Auth>
      </div>
  )}
}