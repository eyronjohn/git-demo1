import './editprofile.css'

export default function EditProfile() {
    return (
        <>
        <div className="edit-container">
            <h1>Edit your Profile</h1>
            <img src="/src/assets/user 2.png" alt="user-icon" id='profile-pic' />
            <button id='edit-photo'>Edit Photo</button>
            <div id='edit-form'>
                <p> Full Name </p>
                <input type="text"/>
                <p> Username </p>
                <input type="text"/>
                <p> Contact Number </p>
                <input type="text"/>
                <p> Email </p>
                <input type="text"/>
                <p> Password </p>
                <input type="text"/>
                </div>
            <div id='action-buttons'> 
                <button id='save-btn'>Save</button>
                <button id='cancel-btn'>Cancel</button>
            </div>
        </div>
        </>
    )
}