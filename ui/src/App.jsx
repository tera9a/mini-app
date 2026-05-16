import React, { useState } from 'react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome';

function App() {
  const [page, setPage] = useState('signin');
  const [username, setUsername] = useState('');

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '400px', margin: '60px auto' }}>
      {page === 'signup' && (
        <SignUp onSwitch={() => setPage('signin')} />
      )}
      {page === 'signin' && (
        <SignIn
          onSwitch={() => setPage('signup')}
          onLogin={(name) => { setUsername(name); setPage('welcome'); }}
        />
      )}
      {page === 'welcome' && <Welcome username={username} />}
    </div>
  );
}

export default App;