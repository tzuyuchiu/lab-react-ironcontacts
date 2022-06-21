import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import contacts from './contacts.json';

function App() {
  // Iteration 1 | Display 5 Contacts
  const initialContacts = [
    contacts[0],
    contacts[1],
    contacts[2],
    contacts[3],
    contacts[4],
  ];

  const [mycontacts, setmyContacts] = useState(initialContacts);
  // Iteration 3 | Add New Random Contacts
  const handleAddClick = (event) => {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * contacts.length) + 4;
    setmyContacts([...mycontacts, contacts[randomNum]]);
  };
  // Iteration 4 | Sort Contacts by Popularity
  const handleSortedByPopularityClick = () => {
    const sortByPopularity = mycontacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    // console.log('contactSorted', sortByPopularity);
    setmyContacts([...mycontacts, sortByPopularity]);
  };
  // Iteration 4 | Sort Contacts by Name
  const handleSortedByNameClick = () => {
    const sortByName = mycontacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setmyContacts([...mycontacts, sortByName]);
  };
  // Iteration 5 | Remove Contacts
  const handleDeleteClick = (index) => {
    const copy = [...mycontacts];
    copy.splice(index, 1);
    setmyContacts(copy);
  };

  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>

      <button onClick={handleAddClick}>Add random contact</button>
      <button onClick={handleSortedByPopularityClick}>
        Sort by popularity
      </button>
      <button onClick={handleSortedByNameClick}>Sort by name</button>

      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>WonOscar</th>
            <th>WonEmmy</th>
            <th>Action</th>
          </tr>
          {mycontacts.map((item, i) => (
            <tr key={i}>
              <td>
                <img src={item.pictureUrl} width="100px" />
              </td>
              <td>{item.name}</td>
              <td>{item.popularity}</td>
              {/* Iteration 2 | Conditionally Display Awards Info */}
              <td>{item.wonOscar && <p>Got the Oscar Award! </p>}</td>
              <td>{item.wonEmmy && <p>Got the Emmy Award!</p>}</td>

              <td>
                <button onClick={handleDeleteClick}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
