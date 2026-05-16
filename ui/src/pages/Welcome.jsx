import React from 'react';

function Welcome({ username }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Xoş gəldin, {username}!</h1>
    </div>
  );
}

export default Welcome;