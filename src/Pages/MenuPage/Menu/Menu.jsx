import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../../../Components/SectionTiltle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | | Menu</title>
            </Helmet>
            <Cover img={img} title="Our Menu"></Cover>
            <SectionTitle heading="Today's Offer" subHeading="-----Check it out-----"></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>
            <MenuCategory item={desserts} img={dessertImg} title={"desserts"}></MenuCategory>
            <MenuCategory item={pizzas} img={dessertImg} title={"pizzas"}></MenuCategory>
            <MenuCategory item={salads} img={dessertImg} title={"salads"}></MenuCategory>
            <MenuCategory item={soups} img={dessertImg} title={"soups"}></MenuCategory>


        </div>
    );
};

export default Menu;