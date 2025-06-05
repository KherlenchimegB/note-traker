import { useState } from "react";
import Button from "./components/AddButton";
import Note from "./components/Note";
let notes = [
  {
    name: "sjhgbjhvbg",
    id: 0,
    status: false,
  },
  {
    name: "hhhhhhh",
    id: 1,
    status: false,
  },
];
function App() {
  let [formData, setFormData] = useState({
    name: "",
    id: "",
  });
  let [data, setData] = useState(notes);

  const addNote = () => {
    if (formData.name === "") {
      alert("Please enter a info!");
      return;
    }
    const newNote = {
      name: formData.name,
      id: Math.floor(Math.random() * 100),
      status: false,
    };
    setData([...data, newNote]);
    setFormData({ ...formData, name: "" });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNote();
    }
  };
  const deleteUser = (id) => {
    const filteredData = data.filter((data) => data.id !== id);
    setData(filteredData);
  };
  const toggleStatus = (id) => {
    const changedData = data.map((note) => {
      if (note.id === id) {
        note.status = note.status === true ? false : true;
        return note;
      }
      return note;
    });
    setData(changedData);
  };

  return (
    <div className="flex flex-col bg-[#F3F4F6] items-center w-screen gap-[20px]">
      <div className="flex flex-col w-[600px] bg-white size-fit rounded-md p-[16px] gap-[13px]">
        <div className="flex flex-col gap-[3px]">
          <h1 className="text-3xl font-semibold text-center">Note Taker</h1>
          <textarea
            className="h-[150px] border border-[#E4E4E7] rounded-md pl-4 w-full"
            type="text"
            placeholder="Enter your note here ..."
            onChange={(event) => {
              setFormData({ ...formData, name: event.target.value });
            }}
            onKeyDown={(event) => {
              handleKeyDown(event);
            }}
            value={formData.name}
          />
        </div>
        <p className="text-gray-600 text-xm">Press enter to add note</p>
        <Button name={formData.name} handleFunction={addNote} />
      </div>

      {data.map((note) => {
        return (
          <Note
            name={note.name}
            id={note.id}
            handleFunction={deleteUser}
            status={note.status}
            toggleStatus={toggleStatus}
          />
        );
      })}
    </div>
  );
}

export default App;
