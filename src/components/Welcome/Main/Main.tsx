import './Main.scss';
import { Button } from '../../__other/Button/Button';
import heroesImg from '../../../imgs/heroes.png';

export function Main() {
  return (
    <main className="main">
      <h1 className="main__title">
        Добро пожаловать в<br />
        <span className="main__title_underline">Концепт</span>
      </h1>
      <h3 className="main__subtitle">
        Концепт - место, где работа идет быстрее. <br />
        Объединяй свои идеи и планы в одном месте.
      </h3>
      <Button text='Подключиться к "Концепту"' />
      <img src={heroesImg} alt="Мужчина в тапочках" className="main__img" />
    </main>
  );
}
