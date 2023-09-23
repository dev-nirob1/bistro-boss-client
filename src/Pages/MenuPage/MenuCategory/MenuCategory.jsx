import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ item, title, img }) => {
    return (
        <div className="my-24">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
                {
                    item.map(item => (<MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>))
                }
            </div>
            <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-5">Get Started</button></Link>
        </div>
    );
};

export default MenuCategory;