import './Header.scss';
import { useScrollTop } from '../../hooks/use-scroll-top';
import { Logo } from '../Logo/Logo';

export function Header() {
  const scrollTop = useScrollTop();

  return (
    <header className={`header ${scrollTop ? 'header_scroll_on' : ''}`}>
      <Logo />
    </header>
  );
}
