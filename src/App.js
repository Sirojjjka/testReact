import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import './App.css';
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Services from "./Components/Services/Services";
import fast from "./Components/png/fast.png";
import our from "./Components/png/our.png";
import footer from "./Components/png/footer.png";
import Search from "./Components/Search/Search";


function App() {
    return (
        <div className="App">
            <Header/>
            <Search/>
            <Slider/>
            <Services/>
            <div className="fast"><img src={fast} alt=""/></div>
            <div className="our"><img src={our} alt=""/></div>
            <div className="footer"><img src={footer} alt=""/></div>


        </div>
    );
}

export default App;
