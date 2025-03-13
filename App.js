import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
    const navigate = useNavigate();  

    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState(""); // Stores search text

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

    // ✅ Define moods inside App component
    const moodEntries = ["Happy", "Sad", "Excited", "Angry", "Relaxed"];
    
    const filteredMoods = moodEntries.filter((mood) =>
        mood.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 3000); // Change quote every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="home-container">
            <div className="header">
                <div className="searchbar">
                    <input
                        className="searchbar"
                        type="text"
                        placeholder="Search moods..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    /> 
                    <div className="dropdown-list">
                    {searchTerm && filteredMoods.length > 0 && (
                        <ul>
                            {filteredMoods.map((mood, index) => (
                                <li key={index} onClick={() => setSearchTerm(mood)}>
                                    {mood}
                                </li>
                            ))}
                        </ul>
                    )}
                    </div>
                </div>
            </div>

            <div className="menu">
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li onClick={() => navigate("/mydiaries")} > Journals </li>
                    <li><Link to="/moods">Moods</Link></li>
                    <li onClick={() => navigate("/settings")} style={{ cursor: "pointer" }}>Settings</li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>

            <div className="main">
                <h2>Home</h2>
                <p>
                    eMoods is a user-friendly app for patients to track symptom data relating to Bipolar I and II disorders, Depression, PTSD, and Anxiety Disorders.
                    Identify triggers and patterns to help prevent relapses, and enhance doctor's visits with detailed data exports.
                </p>
                
                <div className="carousel">
                    <p className="quote">{quotes[currentIndex]}</p>
                </div>
            </div>

            <div className="sortbox1">
                Select Your Current Mood:
                <ul>
                    {moodEntries.map((mood, index) => (
                        <li key={index}>{mood}</li>
                    ))}
                </ul>
            </div>

            <div className="entry">
                <h2><Link to="/entry"> + Add a new entry</Link></h2>
            </div>
        </div>
    );
}

export default App;
