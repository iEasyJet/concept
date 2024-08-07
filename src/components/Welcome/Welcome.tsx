import './Welcome.scss';
import { Header } from '../Header/Header';
import { Main } from './Main/Main';
import { Footer } from '../Footer/Footer';

export function Welcome() {
  return (
    <div className="welcome">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
