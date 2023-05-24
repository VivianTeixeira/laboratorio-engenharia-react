import { useState } from "react";
import { Link } from 'react-router-dom';

export default function CounterAula5() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5)
          setNumber(n => n + 1)
          setNumber(42)
        }}
      >
        Increment Number
      </button>
        <div>
            <Link to="/">Voltar a home</Link>
        </div>
    </>
  );
}
