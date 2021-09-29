/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { FaTimes, FaUserEdit } from 'react-icons/fa';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import {
  blockButton,
  buttonDiv,
  checkBoxAttending,
  container,
  deleteButton,
  faEdit,
  faTimes,
  functionButton,
  guestListItems,
  showAllButton,
} from './Globalstyle';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = 'https://lp-guest-list-api.herokuapp.com';

  // functions for onChange firstName and lastName

  const onChangeFirstName = (event) => {
    setFirstName(event.currentTarget.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.currentTarget.value);
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
      }),
    });
    const createdGuests = await response.json();
    setGuests([...guests, createdGuests]);
  };

  // delete the guest

  const deleteGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/${guest}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    response.status === 200
      ? setGuests(guests.filter((g) => g.id !== deletedGuest.id))
      : alert('Error Deleting This Guest');
  };

  // delete all guests

  const deleteAllGuests = async () => {
    for (let i = 0; i < guests.length; i++) {
      const currentGuestId = guests[i].id;
      const response = await fetch(`${baseUrl}/${currentGuestId}`, {
        method: 'DELETE',
      });
      response.status === 200
        ? setGuests([])
        : alert('Error Deleting All Guest');
    }
  };

  // update the guest to attending

  const updateGuest = async (guest) => {
    const response = await fetch(`${baseUrl}/${guest.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: guest.attending }),
    });
    const updatedGuest = await response.json();
    console.log(updatedGuest);
  };

  // on change Attending function for checkbox

  const onChangeAttending = (id, attendingVariable) => {
    const copyGuests = [...guests];
    const guestFind = copyGuests.find((g) => g.id === id);
    guestFind.attending = attendingVariable;
    updateGuest(guestFind);
    setGuests(copyGuests);
  };

  // handle Edit

  const handleEdit = (id) => {
    const copyGuests = [...guests];
    const guestFind = copyGuests.find((g) => g.id === id);
    guestFind.firstName = firstName;
    guestFind.lastName = lastName;
    updateGuest(guestFind);
    setGuests(copyGuests);
  };

  // Search for Guests Attending

  const guestsAttending = () => {
    const filterList1 = [...guests];
    const filterAttendingList = filterList1.filter(
      (guest) => guest.attending === true,
    );
    setGuests(filterAttendingList);
  };

  // Search for Guests NOT Attending

  const guestsNotAttending = () => {
    const filterNotAttendingList = guests.filter(
      (guest) => guest.attending === false,
    );
    setGuests(filterNotAttendingList);
  };

  // show all guests

  const guestsShowAll = async () => {
    const response = await fetch(baseUrl);
    const res = await response.json();
    setGuests(res);
  };

  // press save button to handle onSubmit

  const onSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      alert('PLEASE ENTER FULL NAME');
      return;
    }
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
            id="firstName"
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
          <button css={blockButton}>SAVE</button>
        </form>
      )}
      <div>
        {loading ? 'Loading...' : ''}
        <ul>
          {guests.map((guest) => {
            return (
              <div css={guestListItems} key={guest.id}>
                <li>
                  {guest.firstName} {guest.lastName}
                  <FaTimes
                    css={faTimes}
                    onClick={() => deleteGuest(guest.id)}
                  />
                  <FaUserEdit
                    css={faEdit}
                    onClick={() => handleEdit(guest.id)}
                  />
                  <input
                    css={checkBoxAttending}
                    type="checkbox"
                    id="attending"
                    checked={guest.attending}
                    onChange={(event) =>
                      onChangeAttending(guest.id, event.currentTarget.checked)
                    }
                  />
                </li>
              </div>
            );
          })}
        </ul>
        <div>
          <button css={showAllButton} onClick={() => guestsShowAll()}>
            SHOW ALL
          </button>
        </div>
        <div css={buttonDiv}>
          <button css={functionButton} onClick={() => guestsAttending()}>
            ATTENDING
          </button>
          <button css={functionButton} onClick={() => guestsNotAttending()}>
            NOT ATTENDING
          </button>
        </div>
        <div css={buttonDiv}>
          <button css={deleteButton} onClick={() => deleteAllGuests()}>
            DELETE ALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
