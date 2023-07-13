import React, { useState } from "react";
import "./ChecklistApp.css";

function ChecklistApp() {
  // useState returns the current state and a function 'updateItems' to update that state.
  const [items, updateItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();

    // Check if 'newItem' is empty
    if (newItem.trim() === "") {
      setErrorMessage("Please enter an item to add");
      return; // Stops execution if 'newItem' is empty
    }

    // Use the spread operator to copy existing items array and add newItem at the end.
    updateItems([...items, newItem]);

    // Reset 'newItem' and 'errorMessage' state back to empty string.
    setNewItem("");
    setErrorMessage("");
  };

  // Use filter function to create a new array excluding the item with the clicked index.
  const handleRemove = (index) => {
    // Mutate state by calling the setter function 'updateItems'.
    updateItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="container">
      <header>
        <h1>Checklist Application</h1>
        <small>Tip: To remove an item from the list, simply click on it.</small>
      </header>
      <form onSubmit={handleAdd}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter an item to add to your checklist"
        />
        <button type="submit">Add</button>
      </form>
      {/* Display error message when present */}
      {errorMessage && <p className="error">{errorMessage}</p>}

      {/* Maps through the 'items' array to create a list item for each one. */}
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChecklistApp;
