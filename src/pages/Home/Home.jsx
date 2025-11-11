import './home.css'
import { Link } from "react-router";

export default function Home() {

    return (        
        <>
        <img src='/src/assets/—Pngtree—happy dog and cat with_15913340 2.png' id='pet-pic' alt='dogpic'/>
        <div id='home-container'>    
            <div className="home-info">
                <h1> SafeP<span><img src='/src/assets/paw-print 4.png' alt='paw'/></span>ws</h1>
                <p> Reuniting hearts, one paw at a time. To help all our pet owners in this community, even you, by joining us. </p>
                <Link to="/register" id="register" className="cursor-pointer hover:text-[#A60530]">
                REGISTER NOW!
                </Link>
            </div>
        </div>
        </>
    )
}