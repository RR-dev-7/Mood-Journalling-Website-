import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Settings from "./pages/Settings";
import "./App.css";

function Home() {
    return <h2>Home Page</h2>;
}


function App() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [entries, setEntries] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const quotes = [
        "Believe you can and you're halfway there.",
        "Act as if what you do makes a difference. It does.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only way to do great work is to love what you do.",
        "Your limitation—it's only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Stay focused and never give up.",
        "Don't stop when you're tired. Stop when you're done."
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setIsDropdownActive(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 3000); // Change quote every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <Router>
            <div className="container">
                <div className="header">header</div>

                <div className="menu">
                    <h2>Menu</h2>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/journal">Journal</Link></li>
                        <li><Link to="/moods">Moods</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>

                <div className="main">
                    <h2>Home</h2>
                    <p>
                        eMoods is a user-friendly app for patients to track symptom data relating to Bipolar I and II disorders, Depression, PTSD, and Anxiety Disorders.
                        Identify triggers and patterns to help prevent relapses, and enhance doctor's visits with detailed data exports.
                    </p>
                    <Routes>
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                    <div className="carousel">
                        <p className="quote">{quotes[currentIndex]}</p>
                    </div>

                </div>

            
                

                <div className="sortbox1">
                    <div className="dropbox">
                        <label htmlFor="sort">Sort Down Your Journals</label>
                        <br />
                        <br />
                        <select id="sort" defaultValue="">
                            <option value="" disabled>Sort By</option>
                            <option value="day">Daily Entries</option>
                            <option value="week">Weekly Entries</option>
                            <option value="month">Monthly Entries</option>
                        </select>
                    </div>
                </div>

                <div className="entry">
                    <h2><Link to="/entry"> + Add a new entry</Link></h2>
                </div>
            </div>
        </Router>
    );
}

export default App;
