import React from 'react';

export default function HologramCard({ title, icon, onClick }) {
  return (
    <div className="hologram-card" onClick={onClick}>
      <img src={icon} className="card-icon" />
      <p className="card-title">{title}</p>
    </div>
  );
}
