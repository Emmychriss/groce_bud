import { useState } from "react";

const Form = ({submitForm}) => {
  const [newITemName, setNewItemName] = useState("");
  return (
    <form onSubmit={submitForm}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newITemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
