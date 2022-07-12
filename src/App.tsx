import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

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

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  });

  return (
    <div className="App">
      <h1>Mati subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
