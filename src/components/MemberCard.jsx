export default function MemberCard({ member }) {
  return (
    <article className="member-card">
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
