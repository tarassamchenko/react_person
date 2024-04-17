export const Person = ({ person }) => {
  let MariageStatus = 'I am not married';
  let partner = 'husband';

  if (person.isMarried) {
    if (person.sex === 'm') {
      partner = 'wife';
    }

    MariageStatus = `${person.partnerName} is my ${partner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      <p className="Person__partner">{MariageStatus}</p>
    </section>
  );
};
