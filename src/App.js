import { useState } from "react";

import Header from "./Header.js";
import Form from "./Form.js";
import TravelListDetail from "./TravelListDetail.js";
import Footer from "./Footer.js";

export default function App() {
  const [items, setItems] = useState([]);

  const handleCkecked = function (id) {
    setItems((item) =>
      [...item].map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = function (id) {
    setItems((item) => [...item].filter((item) => item.id !== id));
  };

  const handleClearItem = function () {
    setItems([]);
  };

  return (
    <div className="travel">
      <Header />
      <Form onSetItems={setItems} />
      <TravelListDetail
        items={items}
        onHandleChecked={handleCkecked}
        onHandleDeleteItem={handleDeleteItem}
        onHandleClearItem={handleClearItem}
      />
      <Footer items={items} />
    </div>
  );
}
