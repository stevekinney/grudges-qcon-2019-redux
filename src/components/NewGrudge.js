import React from 'react';

const NewGrudge = ({ addGrudge }) => {
  const [person, setPerson] = React.useState('');
  const [reason, setReason] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addGrudge({ person, reason });
  };

  return (
    <form className="NewGrudge" onSubmit={handleSubmit}>
      <input
        className="NewGrudge-input"
        placeholder="Person"
        type="text"
        value={person}
        onChange={event => setPerson(event.target.value)}
      />
      <input
        className="NewGrudge-input"
        placeholder="Reason"
        type="text"
        value={reason}
        onChange={event => setReason(event.target.value)}
      />
      <input className="NewGrudge-submit button" type="submit" />
    </form>
  );
};

export default NewGrudge;
