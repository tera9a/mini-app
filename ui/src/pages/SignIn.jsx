import React, { useState } from 'react';

function SignIn({ onSwitch, onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) { onLogin(data.username); }
      else { setMsg(data.message || 'Xəta baş verdi.'); }
    } catch { setMsg('API ilə əlaqə yoxdur.'); }
  };

  return (
    <div>
      <h2>Daxil ol</h2>
      <input name="email" placeholder="Email və ya istifadəçi adı" onChange={handle} style={inp} /><br/>
      <input name="password" type="password" placeholder="Şifrə" onChange={handle} style={inp} /><br/>
      <button onClick={submit} style={btn}>Daxil ol</button>
      <p>{msg}</p>
      <p>Hesabın yoxdur? <span onClick={onSwitch} style={link}>Qeydiyyat</span></p>
    </div>
  );
}

const inp = { width: '100%', padding: '8px', margin: '6px 0', boxSizing: 'border-box' };
const btn = { width: '100%', padding: '10px', background: '#2196F3', color: 'white', border: 'none', cursor: 'pointer' };
const link = { color: 'blue', cursor: 'pointer' };

export default SignIn;