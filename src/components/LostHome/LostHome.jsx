import './losthome.css'
import { Link } from 'react-router'

export default function LostHome() {
    return (
        <>
            <div className="pet-component">
                <img src='/src/assets/paw-print 4.png'/>
                <p>Pet Name</p>
                <p>Species</p>
                <p>Breed</p>
                <Link to = '/lostsingleview'>
                <p id='single-view'>Further Details</p>
                </Link>
            </div>
        </>
    )
}