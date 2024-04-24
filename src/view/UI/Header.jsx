import Menu from '../components/Menu';

export default function Header({ title }) {
  return (
    <header className="app-header">
      <Menu className="menu" />
      <div className="header">
        <h1>{title}</h1>
      </div>
    </header>
  );
}
