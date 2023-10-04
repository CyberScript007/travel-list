import { useState } from "react";

export default function Form({ onSetItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSetDescription = function (e) {
    setDescription(e.target.value);
  };

  const handleSetQuantity = function (e) {
    setQuantity(+e.target.value);
  };

  const handleSetItem = function (e) {
    e.preventDefault();

    if (!description) return;

    onSetItems((item) => [
      ...item,
      { quantity, description, packed: false, id: Date.now() },
    ]);

    setDescription("");
    setQuantity(1);
  };

  return (
    <section className="section--1">
      <h2 className="heading--2">What do you need for your 🤑 trip?</h2>
      <form className="form" onSubmit={handleSetItem}>
        <select
          className="travel__select-number"
          value={quantity}
          onChange={handleSetQuantity}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map(
            (el, index) => (
              <option value={el} key={index}>
                {el}
              </option>
            )
          )}
        </select>
        <input
          type="text"
          placeholder="Item..."
          className="form__input"
          value={description}
          onChange={handleSetDescription}
        />
        <button className="btn btn--submit" type="submit">
          add
        </button>
      </form>
    </section>
  );
}
