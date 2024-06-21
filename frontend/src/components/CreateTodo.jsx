import { useState } from 'react';

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{backgroundColor: 'orange', borderRadius:'10px', border:'2px solid black' }}>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />

      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then(async (res) => {
              const json = await res.json();
              alert("Todo added");
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}