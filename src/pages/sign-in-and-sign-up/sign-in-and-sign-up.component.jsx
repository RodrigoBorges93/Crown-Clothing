import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';
import { connect } from 'react-redux';



const SignInAndSignUpPage = ({ currentUser }) => (

  <div className='sign-in-and-sign-up'>
  <SignIn />
  <SignUp />
  <h1>{currentUser}</h1>
  </div>

)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(SignInAndSignUpPage);