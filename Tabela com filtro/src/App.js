import "./styles.css";
import Search from "./Search.js";
import Table from "./Table.js";
import { useState } from "react";

export default function App() {
  const products = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5"
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ];

  const [form, setForm] = useState({});

  const handleSearch = (e) => {
    setForm((form) => ({ ...form, search: e.target.value }));
  };

  const handleBox = (e) => {
    setForm((form) => ({ ...form, box: !form.box }));
  };

  return (
    <div className="App">
      <Search input={form} hSearch={handleSearch} hBox={handleBox} />
      <Table input={form} products={products} />
    </div>
  );
}
