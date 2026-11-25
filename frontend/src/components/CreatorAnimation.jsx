import React from 'react';
import './CreatorAnimation.css';

const creators = [
  { letter: 'H', name: 'Hemant', color: '#e74c3c' },
  { letter: 'A', name: 'Aayushi', color: '#e67e22' },
  { letter: 'A', name: 'Aditya', color: '#f39c12' },
  { letter: 'T', name: 'Tushar', color: '#c0392b' }
];

/**
 * CreatorAnimation component
 * Displays H-A-A-T letters with names appearing one by one
 */
const CreatorAnimation = () => {
  return (
    <section className="creator-section">
      <div className="creator-container">
        <h3 className="creator-heading">Meet the Creators</h3>
        <div className="creator-letters">
          {creators.map((creator, index) => (
            <div
              key={creator.name}
              className="creator-card"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <span
                className="creator-letter"
                style={{ color: creator.color }}
              >
                {creator.letter}
              </span>
              <span className="creator-name">{creator.name}</span>
            </div>
          ))}
        </div>
        <p className="creator-tagline">Team HAAT — Building Safety with Innovation</p>
      </div>
    </section>
  );
};

export default CreatorAnimation;
