import Navbar from "../Navbar/Navbar";
import Video from "../assets/Video3.mp4";
import "./Home.css";
function Home() {
    return (
        <div>
            <div className="overlay"></div>
            <Navbar />
            <video style={{ width: "100%", height: "100%", pointerEvents: "none" }} src={Video} autoPlay loop muted ></video>
            <div className="content">
                <h1 style={{ fontSize: "40px", fontWeight: "400" }}>Software Development , IT Outsourcing...</h1>
                <h1 style={{ fontSize: "65px" }}>Why not go beyond?</h1>
                <h2 style={{ fontSize: "26px", fontWeight: "200" }}>We work with specific purposes and intended result in mind</h2>
                <button>More</button>
            </div>
            <div className="main">
                <img src="https://xotiv.com/wp-content/themes/xotiv/img/2-2.png"></img>
                
            </div>

        </div>
    );
}
export default Home;