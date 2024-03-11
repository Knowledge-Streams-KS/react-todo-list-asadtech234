import { useState } from "react";
import Task from "./task";

const TaskList = () => {
  const [value, setValue] = useState([]);
  const [input, setInput] = useState("");

  const handleinput = (event) => {
    setInput(event.target.value);
  };
  const handlesubmit = () => {
    setValue([...value, input]);
  };
  const handledelete = (index) => {
    // setValue([...value, input]);
    const updatedata = [...value.slice(0, index), ...value.slice(index + 1)];
    setValue(updatedata);
  };

  return (
    <div>
      <input type="text" onChange={handleinput} />
      <button onClick={handlesubmit}>react</button>
      {value.map((asad, index) => {
        return (
          <Task
            key={index}
            tasklist={asad}
            delete={() => handledelete(index)}
          />
        );
      })}
    </div>
  );
};
export default TaskList;
