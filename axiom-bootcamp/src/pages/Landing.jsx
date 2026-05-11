import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Code, Cpu, Database } from 'lucide-react';

const Landing = () => {
  return (
    <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div className="float">
            <Terminal size={64} color="var(--accent)" />
          </div>
        </div>
        
        <h1 style={{ fontSize: '48px', marginBottom: '16px', letterSpacing: '-0.02em' }} className="gradient-text">
          Zero to Agent
        </h1>
        <p style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '40px' }}>
          10 days. Production agents. No fluff.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/dashboard" className="btn btn-primary btn-lg">Start Bootcamp</Link>
          <a href="#curriculum" className="btn btn-ghost btn-lg">View Syllabus</a>
        </div>
      </div>

      <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
        <div className="card">
          <Cpu color="var(--accent-2)" size={32} style={{ marginBottom: '16px' }} />
          <h3>Core Internals</h3>
          <p>Master transformer architecture, token limits, and raw API capabilities before abstracting.</p>
        </div>
        <div className="card">
          <Code color="var(--accent)" size={32} style={{ marginBottom: '16px' }} />
          <h3>Tooling & Loops</h3>
          <p>Implement function calling, ReAct patterns, and autonomous self-correcting loops.</p>
        </div>
        <div className="card">
          <Database color="var(--warning)" size={32} style={{ marginBottom: '16px' }} />
          <h3>Memory & Scale</h3>
          <p>Vector databases, episodic memory, RAG architectures, and multi-agent orchestration.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
