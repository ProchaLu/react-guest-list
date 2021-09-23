/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { FaCheck, FaTimes, FaUserEdit } from 'react-icons/fa';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import {
  blockButton,
  container,
  faCheck,
  faEdit,
  faTimes,
  guestListItems,
  inputCheck,
} from './Globalstyle';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = 'http://localhost:5000';

  const onChangeFirstName = (event) => {
    setFirstName(event.currentTarget.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.currentTarget.value);
  };

  const onChangeAttending = (event) => {
    setAttending(event.currentTarget.checked);
  };

  // fetch data from baseUrl to get the list
  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(baseUrl);
      const res = await response.json();
      setGuests(res);
      setLoading(false);
    }
    fetchUserData();
  }, []);

  // function to post the guest to the server

  const createNewGuest = async () => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        attending: attending,
      }),
    });
    const createdGuest = await response.json();
    const guestListCopy = [...guests];
    guestListCopy.push(createdGuest);
    setGuests(guestListCopy);
  };

  // delete the guest

  const deleteGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    const guestsDelete = guests.filter((g) => g.id !== deletedGuest.id);
    setGuests(guestsDelete);
  };

  // submit the new guest

  const onSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      alert('PLEASE ENTER NAME');
      return;
    }
    console.log(firstName, lastName, attending);
    createNewGuest((firstName, lastName, attending));

    setFirstName('');
    setLastName('');
    setAttending(false);
  };

  return (
    <div css={container}>
      <Header onAdd={() => setShowInput(!showInput)} showAdd={showInput} />
      {showInput && (
        <form onSubmit={onSubmit}>
          <Input
            htmlFor="firstName"
            text="First Name"
            type="text"
            id="fristName"
            placeholder="First Name"
            value={firstName}
            onChange={onChangeFirstName}
          />
          <Input
            htmlFor="lastName"
            text="Last Name"
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChangeLastName}
          />
          <div css={inputCheck}>
            <div>Attending</div>
            <input
              type="checkbox"
              checked={attending}
              value={attending}
              onChange={onChangeAttending}
            />
          </div>
          <button css={blockButton}>SAVE</button>
        </form>
      )}
      <div>
        <ul>
          {guests.map((guest) => {
            return (
              <div css={guestListItems} key={guest.id}>
                <li>
                  {guest.firstName} {guest.lastName}
                  <FaTimes css={faTimes} onClick={deleteGuest} />
                  <FaUserEdit css={faEdit} />
                  <FaCheck css={faCheck} />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
