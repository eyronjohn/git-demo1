import './forgotpassword.css'

export default function ForgotPassword() {
    return (
        <>
            <div className='forgot-container'>
                <p id='forgot-pass'> Forgot your Password? </p>
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