import Person from "./Person";

const List = ({ person }) => {
  return (
    <section>
      {person.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
export default List;
