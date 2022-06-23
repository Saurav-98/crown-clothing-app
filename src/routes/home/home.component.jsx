
import categories from "../../components/CategoriesMenu/CategoriesMenu";
import { Outlet } from "react-router-dom";
import TileCategory from "../../components/Tile/TileCategory";
import { Fragment } from "react";


const Home = () => {
  return (
    <Fragment >
        <Outlet />
        <main>
            <h1>Crown Clothing</h1>
            <TileCategory categories={categories} />
        </main>
        
    </Fragment>
  );
};

export default Home;