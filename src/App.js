import "./App.css";

import categories from "./components/CategoriesMenu/CategoriesMenu";

import "./categories.styles.scss";

import TileCategory from "./components/Tile/TileCategory";

const App = () => {
  return (
    <main>
      <h1>Crown Clothing</h1>
      <TileCategory categories={categories} />
    </main>
  );
};

export default App;
