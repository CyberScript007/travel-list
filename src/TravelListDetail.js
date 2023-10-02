import { useState } from "react";

export default function TravelListDetail({
  items,
  onHandleChecked,
  onHandleDeleteItem,
  onHandleClearItem,
}) {
  const [sortItem, setSortItem] = useState("input");

  let sorted;

  if (sortItem === "input") {
    sorted = items;
  }

  if (sortItem === "description") {
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortItem === "packed") {
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <main className="travel__details-container">
      <div className="travel__details">
        <ul className="travel__list">
          {sorted.map((item) => (
            <Item
              item={item}
              key={item.id}
              onHandleChecked={onHandleChecked}
              onHandleDeleteItem={onHandleDeleteItem}
            />
          ))}
        </ul>
        <div className="travel__sort-container">
          <select
            className="travel__sort"
            value={sortItem}
            onChange={(e) => setSortItem(e.target.value)}
          >
            <option value="input">sort by input order</option>
            <option value="description">sort by description order</option>
            <option value="packed">sort by packed status</option>
          </select>
          <button className="btn btn--clear" onClick={onHandleClearItem}>
            clear list
          </button>
        </div>
      </div>
    </main>
  );
}

function Item({ item, onHandleChecked, onHandleDeleteItem }) {
  return (
    <li className="travel__item">
      <input
        type="checkbox"
        className="input__checkbox"
        value={item.packed}
        onChange={() => onHandleChecked(item.id)}
      />
      <p className={`travel__paragraph ${item.packed ? "checked" : ""}`}>
        {item.quantity} {item.description}
      </p>
      <button
        className="btn btn--delete"
        onClick={() => onHandleDeleteItem(item.id)}
      >
        ❌
      </button>
    </li>
  );
}
