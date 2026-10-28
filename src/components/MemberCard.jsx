import { useRef } from 'react';

export default function MemberCard({ member }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const tiltIsEnabled = () =>
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    window.matchMedia('(hover: hover)').matches;

  const handleMouseMove = (event) => {
    if (!tiltIsEnabled()) return;

    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const bounds = card.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - bounds.top) / bounds.height, 0), 1);
    const rotateX = (0.5 - y) * 16;
    const rotateY = (x - 0.5) * 16;

    card.style.transition = 'none';
    card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;
    glow.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,.08), transparent 42%)`;
    glow.style.opacity = '1';
    card.style.boxShadow = '0 18px 36px rgba(0, 0, 0, .32), 0 4px 12px rgba(0, 0, 0, .24)';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    card.style.transition = 'transform 200ms ease, box-shadow 200ms ease';
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    card.style.boxShadow = '';
    glow.style.opacity = '0';
  };

  return (
    <article
      ref={cardRef}
      className="member-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={glowRef} className="member-card-glow" aria-hidden="true" />
      <img
        className="member-avatar"
        src={member.avatar}
        alt={`Ảnh đại diện của ${member.name}`}
      />
      <h2>{member.name}</h2>
      <p className="member-role">{member.role}</p>
      {member.portfolio && (
        <a
          className="portfolio-button"
          href={member.portfolio}
          target="_blank"
          rel="noreferrer"
        >
          Xem portfolio
        </a>
      )}
    </article>
  );
}
