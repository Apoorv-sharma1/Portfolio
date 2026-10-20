import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink, Github, ArrowLeft, CheckCircle2,
  Sparkles, Filter, Globe, Terminal, Tag
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import GradientASCII from '../components/react-bits/GradientASCII';

const CATEGORIES = ['All', 'Full Stack / SaaS', 'Hospitality', 'Corporate', 'Educational', 'Branding'];

export const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div style={{ minHeight: '100vh', background: '#0B0D12', color: '#F5F5F5' }}>

      {/* Hero Banner 600px with GradientASCII */}
      <div style={{ width: '100%', height: '600px', position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <GradientASCII
            colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.8}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(to bottom, rgba(11,13,18,0.65) 0%, rgba(11,13,18,0.35) 50%, rgba(11,13,18,0.98) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '6rem 1.5rem 2.5rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.72rem',
                fontFamily: 'monospace',
                color: '#A5ACB8',
                padding: '0.45rem 0.9rem',
                borderRadius: '0.75rem',
                background: 'rgba(19,23,32,0.85)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                textDecoration: 'none',
              }}
            >
              <ArrowLeft size={13} />
              <span>Back to Home</span>
            </Link>
          </div>

          <div style={{ maxWidth: '720px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                borderRadius: '999px',
                background: 'rgba(19,23,32,0.9)',
                border: '1px solid rgba(56,189,248,0.4)',
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                color: '#38BDF8',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={12} />
              <span>EXHIBITION ARCHIVE // 2022 - PRESENT</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
              }}
            >
              Featured Systems &amp; Deployments
            </h1>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#A5ACB8',
                lineHeight: 1.65,
                maxWidth: '600px',
                marginBottom: '1.5rem',
              }}
            >
              Production-grade MERN platforms, autonomous AI automation systems, and scalable web architectures engineered for real business impact.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.7rem',
                  fontFamily: 'monospace',
                  color: '#A5ACB8',
                  marginRight: '0.25rem',
                }}
              >
                <Filter size={12} style={{ color: '#69C9FF' }} />
                Filter:
              </span>
              {CATEGORIES.map((cat) => (
                <FilterButton
                  key={cat}
                  cat={cat}
                  active={filter === cat}
                  onClick={() => setFilter(cat)}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.65rem',
              fontFamily: 'monospace',
              color: 'rgba(165,172,184,0.6)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '0.75rem',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Terminal size={11} style={{ color: '#69C9FF' }} />
              Interactive ASCII Horizon - move your cursor across the wave
            </span>
            <span style={{ color: '#38BDF8' }}>{filtered.length} project{filtered.length !== 1 ? 's' : ''} shown</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem 5rem',
        }}
      >
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#A5ACB8', padding: '4rem 0', fontFamily: 'monospace' }}>
            No projects match this filter.
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 520px), 1fr))',
              gap: '2rem',
            }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const FilterButton = ({ cat, active, onClick }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '0.4rem 1rem',
        borderRadius: '0.6rem',
        fontSize: '0.7rem',
        fontFamily: 'monospace',
        cursor: 'pointer',
        border: '1px solid',
        transition: 'all 0.18s ease',
        outline: 'none',
        ...(active
          ? {
              background: '#38BDF8',
              color: '#0F172A',
              borderColor: '#38BDF8',
              fontWeight: 800,
              transform: 'scale(1.04)',
              boxShadow: '0 0 16px rgba(56,189,248,0.35)',
            }
          : {
              background: hov ? 'rgba(255,255,255,0.08)' : 'rgba(19,23,32,0.8)',
              color: hov ? '#fff' : '#A5ACB8',
              borderColor: hov ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(6px)',
            }),
      }}
    >
      {cat}
    </button>
  );
};

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '1.25rem',
        background: '#131720',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.08)'}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 24px 52px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}25`
          : '0 4px 20px rgba(0,0,0,0.3)',
        willChange: 'transform',
      }}
    >
      {/* Accent top strip */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: project.accentColor,
          opacity: hovered ? 1 : 0.65,
          transition: 'opacity 0.25s',
        }}
      />

      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Header: badge + category */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span
            style={{
              fontSize: '0.65rem',
              fontFamily: 'monospace',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: '0.4rem',
              border: `1px solid ${project.accentColor}55`,
              background: `${project.accentColor}18`,
              color: project.accentColor,
              letterSpacing: '0.04em',
            }}
          >
            {project.highlight}
          </span>
          <span
            style={{
              fontSize: '0.65rem',
              fontFamily: 'monospace',
              color: '#6B7280',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            <Tag size={10} />
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            color: hovered ? project.accentColor : '#ffffff',
            lineHeight: 1.25,
            marginBottom: '0.65rem',
            transition: 'color 0.25s ease',
          }}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '0.83rem',
            color: '#9CA3AF',
            lineHeight: 1.65,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        {/* Feature bullets */}
        <div
          style={{
            background: 'rgba(11,13,18,0.55)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '0.75rem',
            padding: '0.9rem 1rem',
            marginBottom: '1.25rem',
          }}
        >
          <p
            style={{
              fontSize: '0.6rem',
              fontFamily: 'monospace',
              color: '#6B7280',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.6rem',
            }}
          >
            Core Capabilities
          </p>
          {project.features.map((feat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                marginBottom: i < project.features.length - 1 ? '0.45rem' : 0,
              }}
            >
              <CheckCircle2
                size={13}
                style={{ color: project.accentColor, flexShrink: 0, marginTop: '2px' }}
              />
              <span style={{ fontSize: '0.78rem', color: '#D1D5DB', lineHeight: 1.4 }}>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                padding: '0.25rem 0.6rem',
                borderRadius: '0.4rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                color: '#9CA3AF',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Action row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '1rem',
            marginTop: 'auto',
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.72rem',
              fontFamily: 'monospace',
              color: '#9CA3AF',
              textDecoration: 'none',
            }}
          >
            <Github size={14} />
            <span>Source Code</span>
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              fontFamily: 'monospace',
              padding: '0.45rem 1rem',
              borderRadius: '0.6rem',
              background: hovered ? project.accentColor : 'rgba(255,255,255,0.08)',
              color: hovered ? '#000' : '#fff',
              textDecoration: 'none',
              transition: 'background 0.25s ease, color 0.25s ease',
            }}
          >
            <Globe size={13} />
            <span>Live Demo</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
