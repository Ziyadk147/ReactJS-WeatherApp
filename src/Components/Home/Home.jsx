import Navbar from "../NavBar/Navbar.jsx";
import Timebox from "../Timebox/Timebox.jsx";

export default function Home(){

    return (
        <div className={"bg-gradient-to-l from-[#000000] via-[#444444] to-[#444444] h-full flex flex-row justify-center  "}>
            <Navbar/>
            <main className={" my-52 mx-72 flex justify-start w-full"}>
                <Timebox/>
            </main>

        </div>
    )

}