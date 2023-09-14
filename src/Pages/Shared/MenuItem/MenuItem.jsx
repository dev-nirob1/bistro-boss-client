
const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div className="flex gap-5">
            <img src={image} style={{ borderRadius: '0 200px 200px 200px' }} className="w-[105px]" alt="" />
            <div>
                <h3 className="text-xl">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-500">${price}</p>
        </div>
    );
};

export default MenuItem;