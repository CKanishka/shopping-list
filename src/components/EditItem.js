import { useState } from "react";

const EditItem = ({ selectedItem, handleSave }) => {
  const [label, setLabel] = useState(selectedItem?.label);
  return (
    <div className="edit-label-container">
      <input
        className="edit-label-container__input"
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <button
        className="edit-label-container__btn"
        onClick={() => handleSave(label)}
      >
        Save
      </button>
    </div>
  );
};

export default EditItem;
