import './Header.scss';
import { Button } from '../__other/Button/Button';

export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Твои идеи, документы и планы. Объединяй. Добро пожаловать в&nbsp;
        <span className="header__title_underline">Концепт</span>
      </h1>
      <h3 className="header__subtitle">
        Концепт - место, где работа идет быстрее.
      </h3>
      <Button text='Подключиться к "Концепту"' />
    </header>
  );
}
