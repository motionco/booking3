import Featured from "../../components/featured/Featured";
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">지역별 경기장 보기</h1>
            </div>
        </div>
    )
}

export default Home
