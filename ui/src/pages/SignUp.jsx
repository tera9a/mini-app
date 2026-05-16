import React, { useState } from 'react';

function SignUp({ onSwitch }) {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
  const [msg, setMsg] = useState('');

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (form.password !== form.confirm) { setMsg('Şifrələr uyğun deyil!'); return; }
    try {
      const res = await fetch('http://13.51.206.93:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: form.username, email: form.email, password: form.password })
      });
      const data = await res.json();
      if (res.ok) { setMsg('Qeydiyyat uğurlu! Daxil ola bilərsiniz.'); }
      else { setMsg(data.message || 'Xəta baş verdi.'); }
    } catch { setMsg('API ilə əlaqə yoxdur.'); }
  };

  return (
    <div>
      <h2>Qeydiyyat</h2>
      <input name="username" placeholder="İstifadəçi adı" onChange={handle} style={inp} /><br/>
      <input name="email" placeholder="Email" onChange={handle} style={inp} /><br/>
      <input name="password" type="password" placeholder="Şifrə" onChange={handle} style={inp} /><br/>
      <input name="confirm" type="password" placeholder="Şifrəni təsdiqlə" onChange={handle} style={inp} /><br/>
      <button onClick={submit} style={btn}>Qeydiyyatdan keç</button>
      <p>{msg}</p>
      <p>Hesabın var? <span onClick={onSwitch} style={link}>Daxil ol</span></p>
    </div>
  );
}

const inp = { width: '100%', padding: '8px', margin: '6px 0', boxSizing: 'border-box' };
const btn = { width: '100%', padding: '10px', background: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' };
const link = { color: 'blue', cursor: 'pointer' };

export default SignUp;