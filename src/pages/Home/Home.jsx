
import AllProducts from "../../components/AllProducts/AllProducts";
import Brands from "../../components/Brands/Brands";
import HomeBanner from "../../components/HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div className="mx-4">
            <HomeBanner></HomeBanner>
            <Brands></Brands>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;