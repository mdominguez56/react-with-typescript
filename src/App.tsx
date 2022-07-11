import { useEffect, useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  {
    nick: "Subscriptor 1",
    subMonths: 1,
    avatar: "https://i.pravatar.cc/150?u=sub1",
    description: "Es un sub normal",
  },
  {
    nick: "Subscriptor 2",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=sub2",
  },
];

interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

function App() {
  const [subs, setSubs] = useState<Array<Sub>>();

  useEffect(() => {
    setSubs(INITIAL_STATE);
  });

  return (
    <div className="App">
      <h1>Mati subs</h1>
      <ul>
        {subs?.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>
                {sub.nick} (<small>{`${sub.subMonths} months`}</small>)
              </h4>
              <p>{sub.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
