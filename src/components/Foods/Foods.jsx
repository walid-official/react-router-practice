import { useLoaderData } from "react-router-dom";
import Food from "./Food";
const Foods = () => {
    const Foods = useLoaderData()
    console.log(Foods);

    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                {
                    Foods.categories.map((food,index) => <Food key={index} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;