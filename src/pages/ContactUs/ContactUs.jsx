import './contactus.css'

export default function ContactUs() {
    return (
        <>
            <div className='contact-container'>
                <h1>Contact Us </h1>
                <p id='contact-desc'> Have questions, feedback, or need assistance? We’d love to hear from you! You can reach our team through the following channels. </p>
                <div className='contact-info'>
                    <p id='email'> <span> Email: </span> safepawsph@gmail.com</p>
                    <p id='web'> <span> Website: </span> www.safepawsph.com</p>
                    <p id='fb'> <span> Facebook Page: </span> facebook.com/SafePawsPH</p>
                    <p id='loc'> <span> Location: </span> Manila, Philippines </p>
                </div>
                <h2> Reuniting <span>hearts</span>, one paw at a time. </h2>
                <img src='/src/assets/paw-print 4.png' alt='paw-print'/>
            </div>
        </>
    )
}