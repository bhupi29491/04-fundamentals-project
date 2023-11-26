import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [person, setPerson] = useState(data);

  const ClearBirthdayList = () => {
    setPerson([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{person.length} birthdays today</h3>
        <List person={person} />
        <button
          type="button"
          className="btn btn-block"
          onClick={ClearBirthdayList}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
