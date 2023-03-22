import { useState } from "react";
import EditItem from "./components/EditItem";
import ItemsList from "./components/ItemsList";
import "./App.css";

const DEFAULT_LIST = [
  { id: "item-1", label: "Bread" },
  { id: "item-2", label: "Butter" },
  { id: "item-3", label: "Eggs" },
  { id: "item-4", label: "Jam" },
  { id: "item-5", label: "Muffins" },
];

export default function App() {
  const [list, setList] = useState(DEFAULT_LIST);
  const [selectedItem, setSelecteditem] = useState(DEFAULT_LIST[1]);

  const handleSave = (updatedLabel) => {
    setList((oldList) => {
      const updatedList = oldList.map((item) =>
        item.id === selectedItem.id ? { ...item, label: updatedLabel } : item
      );
      return updatedList;
    });
  };
  return (
    <div className="App">
      <ItemsList
        list={list}
        selectedItem={selectedItem}
        setSelectedItem={setSelecteditem}
      />
      <EditItem
        key={selectedItem.id}
        selectedItem={selectedItem}
        handleSave={handleSave}
      />
    </div>
  );
}
