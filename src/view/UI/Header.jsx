import Menu from '../components/Menu';
import logo from '../../assets/gol.png';

export default function Header({ title }) {
  return (
    <header className="app-header">
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <h1>{title}</h1>
      </div>
      <Menu className="menu" />
    </header>
  );
}
