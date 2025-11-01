import './forgotpassword.css'

export default function ForgotPassword() {
    return (
        <>
            <div className='forgot-container'>
                <h1> Forgot your Password? </h1>
                <div id='forgot-input'>
                    <p> Email </p>
                    <input type='text' id='email' placeholder='Enter your email'/>
                </div>
                <button id="reset">Reset Password</button>
                <button id="cancel">Cancel</button>
            </div>
        </>
    )
}