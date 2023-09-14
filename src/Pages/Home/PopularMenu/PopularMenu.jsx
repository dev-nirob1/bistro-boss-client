import SectionTitle from "../../../Components/SectionTiltle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularCategory = data.filter(item =>item.category === 'popular')
    //         setMenu(popularCategory)
    //     })
    // }, [])
    return (
        <div className="my-24">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'---popular menu---'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular.map(item => (<MenuItem
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