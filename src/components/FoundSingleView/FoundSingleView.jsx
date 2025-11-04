import './foundsingleview.css'

export default function FoundSingleView() {
    return (
        <>
        <div id='found-single-container'>
            <div className='home-header'>
                <div id='text-header'>
                    <h1> Found Pets </h1>
                    <p>Here you can see all the pets that have been reported missing. Check the list to see if you’ve spotted any of them, or learn more about each pet by tapping on their details.</p>
                </div>
                <div id='img-header'>
                    <img src='/src/assets/—Pngtree—happy dog and cat with_15913340 2.png' alt='homepage-illustration'/>
                </div>
            </div>

            <div id='found-pet'>
                <img src='/src/assets/—Pngtree—happy dog and cat with_15913340 2.png' alt='found-pet-image'/>
                <div id='found-details'>
                    <div id='deets-left'>
                        <p>Pet Name: </p>
                        <p>Species: </p>
                        <p>Breed: </p>
                        <p>Color/Markings: </p>
                        <p>Gender: </p>
                        <p>Age/Approximate Age: </p>

                        <div id='extra-deets'>
                            <p>Date found: </p>
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
                <button id='report-click'>FOUND</button>
                <p id='warning'>Each reported found pets will be labeled as <span>‘FOUND’</span>.</p>
            </div>
            <button id='back-found-single'> BACK </button>
        </div>
        </>
    )
}