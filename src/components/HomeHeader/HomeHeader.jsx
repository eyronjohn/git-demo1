import './homeheader.css'

export default function HomeHeader() {
    return (
        <>
            <div className='home-header'>
                <div id='text-header'>
                    <div id='safepaws'>
                        <h1> SafeP </h1>
                        <img src='/src/assets/paw-print 4.png' alt='paw'/>
                        <h1>ws</h1>
                    </div>
                    <p> Reuniting hearts, one paw at a time. To help all our pet owners in this community, even you, by joining us. </p>
                </div>
                <div id='img-header'>
                    <img src='/src/assets/—Pngtree—happy dog and cat with_15913340 2.png' alt='homepage-illustration'/>
                </div>
            </div>
        </>
    )
}