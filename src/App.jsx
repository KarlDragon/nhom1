import Header from './components/Header';
import MemberCard from './components/MemberCard';
import Footer from './components/Footer';
import { team } from './data/team';
import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="team-grid" aria-label="Danh sách thành viên">
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
