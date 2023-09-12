import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTiltle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularCategory = data.filter(item =>item.category === 'popular')
            setMenu(popularCategory)
        })
    }, [])
    return (
        <div className="my-24">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5">
                {
                    menu.map(item => (<MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>))
                }
            </div>

        </div>
    );
};

export default PopularMenu;