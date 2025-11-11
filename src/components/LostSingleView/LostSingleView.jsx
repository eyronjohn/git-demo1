import './lostsingleview.css'

export default function LostSingleView() {
    return (
        <>
        <div id='lost-single-container'>
            <div className='home-header'>
                <div id='text'>
                    <h1> Lost Pets </h1>
                    <p>Here you can see all the pets that have been reported missing. Check the list to see if you’ve spotted any of them, or learn more about each pet by tapping on their details.</p>
                </div>
                <img src='/src/assets/—Pngtree—happy dog and cat with_15913340 2.png' alt='homepage-illustration' id='img-header'/>
            </div>

            <div id='lost-pet'>
                <img src='/src/assets/—Pngtree—happy dog and cat with_15913340 2.png' alt='lost-pet-image'/>
                <div id='lost-details'>
                    <div id='deets-left'>
                        <p>Pet Name: </p>
                        <p>Species: </p>
                        <p>Breed: </p>
                        <p>Color/Markings: </p>
                        <p>Gender: </p>
                        <p>Age/Approximate Age: </p>

                        <div id='extra-deets'>
                            <p>Date Lost: </p>
                            <p>Last Seen: </p>
                            <p>Additional Details: </p>
                        </div>
                    </div>
                    <div id='deets-right'>
                        <p>Owner: </p>
                        <p>Contact Number: </p>
                        <p>Email Address: </p>
                    </div>
                </div>
                <button id='report-click'>Report if you're nearby</button>
                <p id='warning'>Warning: Do not report for <span>fun</span>, or else we will <span>suspend</span> your account. Let’s have some decency.</p>
            </div>
            <button id='back-lost-single'> BACK </button>
        </div>
        </>
    )
}