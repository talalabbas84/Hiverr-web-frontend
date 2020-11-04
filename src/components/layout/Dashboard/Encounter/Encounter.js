import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from '../Dashboard';
import EncounterComponent from './EncounterComponent';

const Encounter = ({ isVerified, isAuthenticated, user }) => {
  const [verification, setVerification] = useState(true);

  if (user && user.data) {
    if (user.data.verification !== verification) {
      setVerification(user.data.verification);
    }
  }
  console.log(verification);
  if (verification === false && isAuthenticated === false) {
    return <Redirect to='/login' />;
  } else if (verification === false && isAuthenticated === true) {
    return <Redirect to='/email-verification' />;
  }
  return (
    <Dashboard>
      <EncounterComponent />
    </Dashboard>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isVerified: state.auth.isVerified,
  loading: state.auth.loading
});
export default connect(mapStateToProps)(Encounter);
