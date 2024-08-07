import './Button.scss';
import { ArrowRight } from 'lucide-react';

export function Button({ text }: { text: string }) {
  return (
    <button className="button">
      {text}
      <ArrowRight className="button__arrow" />
    </button>
  );
}
