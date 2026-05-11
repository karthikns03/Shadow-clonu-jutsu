import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, LayoutDashboard, Activity } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      borderBottom: '1px solid var(--border)',
      background: 'var(--surface)',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4" style={{ color: 'var(--text)', textDecoration: 'none' }}>
          <Terminal color="var(--accent)" size={28} />
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontWeight: 700, letterSpacing: '0.1em' }}>AXIOM</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>ZERO TO AGENT</div>
          </div>
        </Link>
        
        <div className="flex gap-8">
          <Link 
            to="/dashboard" 
            style={{ 
              display: 'flex', alignItems: 'center', gap: '8px',
              color: isActive('/dashboard') ? 'var(--accent)' : 'var(--text-muted)',
              fontWeight: isActive('/dashboard') ? 600 : 400
            }}
          >
            <LayoutDashboard size={18} />
            <span className="hide-mobile">Dashboard</span>
          </Link>
          <Link 
            to="/progress" 
            style={{ 
              display: 'flex', alignItems: 'center', gap: '8px',
              color: isActive('/progress') ? 'var(--accent)' : 'var(--text-muted)',
              fontWeight: isActive('/progress') ? 600 : 400
            }}
          >
            <Activity size={18} />
            <span className="hide-mobile">Progress</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
