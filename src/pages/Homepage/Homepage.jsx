import FoundHome from '../../components/FoundHome/FoundHome'
import LostHome from '../../components/LostHome/LostHome'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Notification from '../../components/Notification/Notification'
import Announcement from '../../components/Announcement/Announcement'
import './homepage.css'
import { useNavigate } from 'react-router'
import { auth } from '../../firebase-config'

export default function Homepage() {

    const navigate = useNavigate();

      const handleLogOut = ()=> {
        auth.signOut().then(() => {
                setTimeout(() => navigate("/login"), 0);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <>
            <div className='homepage-container'>

                <HomeHeader />

                <div className='space-between'>
                    <p className='left-part'> Found Pets </p>
                    <p className='right-part'> View All </p>
                </div>

                <div className = 'found-component'>
                    <FoundHome />
                    <FoundHome />
                    <FoundHome />
                    <FoundHome />
                </div>

                <div className='space-between'>
                    <p className='left-part'> Lost Pets </p>
                    <p className='right-part'> View All </p>
                </div>

                <div className = 'lost-component'>
                    <LostHome />
                    <LostHome />
                    <LostHome />
                    <LostHome />
                </div>

                <div className='space-between'>
                    <p className='left-part'> Notifications </p>
                    <p className='left-part'> Announcement </p>
                </div>

                <div className ="system-notifs">
                    <div id='notif-line'>
                        <Notification />
                        <Notification />
                        <Notification />
                    </div>

                    <div id='ann-line'>
                        <Announcement />
                        <Announcement />
                        <Announcement />
                </div>


            </div>
            <button id="logOut" onClick={handleLogOut}
            className="fixed bottom-6 right-6 px-6 py-2 text-white bg-red-600 hover:bg-red-700 font-semibold rounded-full shadow-md transition-colors duration-200"
            >
            Log Out
            </button>
            </div>
        </>
    )
}