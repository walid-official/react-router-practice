const Food = ({food}) => {
    const {strCategoryThumb,idCategory,strCategory,strCategoryDescription} = food;
    return (
        <div>
            <div className="border py-8">
                <div className="my-4">
                    <img src={strCategoryThumb} alt="" />
                </div>
                <h2 className="font-bold text-3xl text-center py-4">{strCategory}</h2>
                <div className="flex justify-center">
                    <button className="font-medium bg-black border text-white rounded-lg px-6 py-2">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default Food;