export default function Sidebar({ isOpen, toggle }) {
  return (
    <div style={{ width: isOpen ? '200px' : '0', transition: 'width 0.3s', overflow: 'hidden', background: '#222'}}>
      <button onClick={toggle} style={{ margin: '1rem', color: 'white' }}>Close</button>
      {isOpen && <nav>
        <a href="/">Home</a><br/>
        <a href="/login">Login</a><br/>
        <a href="/register">Register</a>
      </nav>}
    </div>
  );
}
