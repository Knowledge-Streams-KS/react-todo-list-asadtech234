import { useState } from "react";

const Task = (props) => {
  const [value, setvalue] = useState(0);
  const [input, setinput] = useState(1);

  const handleinputdata = (props) => {
    setvalue(() => (input ? "true" : "false"));
  };

  const handleinput = (event) => {
    setinput(event.target.checked);
  };

  return (
    <div>
      <h1>{value}</h1>
      {/* <p className="asad">moly no mola na mary ty mola ni o marda oyy </p> */}
      <p>{props.tasklist}</p>

      <input type="checkbox" onChange={handleinput} />
      <button onClick={handleinputdata}>update</button>
      <button onClick={props.delete}>delete</button>
    </div>
  );
};

export default Task;
