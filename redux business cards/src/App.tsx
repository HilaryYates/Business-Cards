import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCard, addOccupation } from "./features/users";

function App() {
  interface User {
    name: string;
    occupation: string;
    id: number;
  }
  const users = useSelector((state: any) => state.users.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [newOccupation, setNewOccupation] = useState("");

  return (
    <div className='App'>
      <div className='addUser'>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='name'
        ></input>
        <input
          onChange={(e) => setOccupation(e.target.value)}
          type='text'
          placeholder='occupation'
        ></input>
        <button
          onClick={() => {
            if (name && occupation !== "")
              dispatch(
                addCard({
                  id: Math.floor(Math.random() * 100) + 1,
                  name,
                  occupation,
                })
              );
          }}
        >
          Create Business Card
        </button>
      </div>
      <div className='displayUsers'>
        {users.map((user: User) => {
          return (
            <div>
              <h1 className='user-name'>{user.name}</h1>
              <h1 className='user-occupation'>{user.occupation}</h1>
              <p>📎</p>
              <input
                onChange={(e) => setNewOccupation(e.target.value)}
                type='text'
                placeholder='New Occupation'
              ></input>
              <button
                onClick={() => {
                  dispatch(
                    addOccupation({
                      id: user.id,
                      occupation: newOccupation,
                    })
                  );
                }}
                className='update-btn'
              >
                Update Occupation
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;