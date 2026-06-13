import Hero from "./sections/hero.tsx";
import Navbar from "./components/Navbar.tsx";
import CreditsDropdown from "./components/CreditsDropdown.tsx";

const App = () =>{
    return (
        <>
            <Navbar/>
            <Hero/>
            <CreditsDropdown></CreditsDropdown>
        </>
    )
}

export default App;