import './Button.scss';
import { ArrowRight } from 'lucide-react';

export function Button({
  text,
  style = 'default',
}: {
  text: string;
  style?: 'default' | 'ghost';
}) {
  type Styles = {
    default: string;
    ghost: string;
  };

  const styles: Styles = {
    default: 'default',
    ghost: 'ghost',
  };

  return (
    <button className={styles[style]}>
      {text}
      <ArrowRight className="arrow" />
    </button>
  );
}
