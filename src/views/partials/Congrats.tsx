import React from 'react';

interface CongratsProps {
  title: string; // Passed from app.ts, though not directly used in this partial's visible content
  counter: string;
}

const Congrats: React.FC<CongratsProps> = ({ counter }) => {
  let content;

  switch (counter) {
    case '1':
      content = (
        <button
          type="button"
          hx-get="/congrats/2"
          hx-swap="innerHTML"
          hx-target="#content-swap"
          className="btn btn-secondary"
        >
          Well Done.
        </button>
      );
      break;
    case '2':
      content = (
        <button
          type="button"
          hx-get="/congrats/3"
          hx-swap="innerHTML"
          hx-target="#content-swap"
          className="btn btn-accent"
        >
          Seems to work pretty well, right?
        </button>
      );
      break;
    case '3':
      content = (
        <button
          type="button"
          hx-get="/congrats/4"
          hx-swap="innerHTML"
          hx-target="#content-swap"
          className="btn btn-warning"
        >
          Don't overdo it.
        </button>
      );
      break;
    case '4':
      content = (
        <p
          id="fade-me-in"
          hx-get="/congrats/5"
          hx-swap="innerHTML settle:1s"
          hx-target="#content-swap"
          className="text-lg"
        >
          Told you. See how smooth this was though? 😎
        </p>
      );
      break;
    case '5':
      content = <p className="text-lg">Okay, now you got me. I'm out of ideas. Have fun!</p>;
      break;
    default:
      content = <p className="text-error">{counter}. I see. You found the default case. Good job.</p>;
  }

  return (
    <div className="p-4">
      <p className="mb-4">Congratulations! You have successfully setup express-ts-jsx-htmx.</p>
      {content}
    </div>
  );
};

export default Congrats;