import React from 'react';

import Dashboard from '../Dashboard';
import MessageComponenet from './MessagesComponent';

const Messages = () => {
  console.log('comig here');
  return (
    <Dashboard>
      <MessageComponenet />
    </Dashboard>
  );
};

export default Messages;
