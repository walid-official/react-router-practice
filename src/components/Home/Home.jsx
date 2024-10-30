import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="py-4 w-11/12 mx-auto">
            <h2 className="text-2xl font-bold text-center">This is Home Page</h2>
            <NavLink to="/Foods"><button className="font-medium bg-black border text-white rounded-lg px-6 py-2">Show All Foods</button></NavLink>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;