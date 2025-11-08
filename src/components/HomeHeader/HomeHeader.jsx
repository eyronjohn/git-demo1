import './homeheader.css'

export default function HomeHeader() {
    return (
        <>
            <div className='home-header'>
                <div id='text-header'>
                    <h1> SafeP<span><img src='/src/assets/paw-print 4.png' alt='paw' id='paw-img'/></span>ws</h1>
                    <p>Reuniting hearts, one paw at a time.</p>
                </div>
                <div id='img-header'>
                    <img src='/src/assets/—Pngtree—happy dog and cat with_15913340 2.png' alt='homepage-illustration'/>
                </div>
            </div>
        </>
    )
}