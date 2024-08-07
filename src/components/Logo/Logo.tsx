import logoImg from '../../imgs/logo.svg';
import './Logo.scss';

export function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logoImg} alt="Логотип" />
      <p className="logo__title">Концепт</p>
    </div>
  );
}
