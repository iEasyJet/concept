import './Footer.scss';
import { Button } from '../__other/Button/Button';
import { Logo } from '../Logo/Logo';

export function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer__wrapper">
        <Button text="Политика конфиденциальности" style="ghost" />
        <Button text="Условия пользования" style="ghost" />
      </div>
    </footer>
  );
}
