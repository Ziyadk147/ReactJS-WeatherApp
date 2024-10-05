export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark flex items-center px-4 lg:px-12 py-4 fixed top-0 w-full z-50">
            {/* Search Input */}
            <div className="flex flex-grow justify-center lg:mr-2">
                <input
                    type="text"
                    className="rounded-3xl bg-lighter-dark shadow-lg shadow-gray-950 px-10 lg:px-8 sm:px-5 my-5 h-12 text-stone-100 font-bold text-center w-full max-w-lg"
                    placeholder="Search for a place"
                />
            </div>

            {/* Current Location Button */}
            <div className=" flex justify-center items-center">
                <button
                    className="rounded-3xl h-12 px-8 bg-button-green shadow-lg shadow-gray-950 text-stone-100 font-bold text-center"
                >
                    Current location
                </button>
            </div>
        </nav>


    )
}

