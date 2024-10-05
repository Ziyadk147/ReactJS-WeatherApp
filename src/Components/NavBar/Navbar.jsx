export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark flex flex-col lg:flex-row items-center justify-center w-full py-4 fixed top-0 z-50">
            <div className="flex flex-grow justify-center lg:mr-2 relative w-full max-w-4xl mb-4 lg:mb-0">
                <input
                    type="text"
                    className="rounded-3xl bg-lighter-dark shadow-lg shadow-gray-950 px-6 lg:px-8 sm:px-5 my-5 h-14 text-stone-100 font-bold text-center w-full pr-12  "
                    placeholder="Search for a place"
                />
                <button
                    type="submit"
                    className="absolute right-4 top-7 bg-transparent text-stone-100 p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                    aria-label="Search"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 21l-4.35-4.35M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"></path>
                    </svg>
                </button>
            </div>

            <div className="flex justify-center items-center lg:ml-2">
                <button
                    className="rounded-3xl h-14 px-8 bg-button-green shadow-lg shadow-gray-950 text-stone-100 font-bold text-center"
                >
                    Current location
                </button>
            </div>
        </nav>


    )
}

