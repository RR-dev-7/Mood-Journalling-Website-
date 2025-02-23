import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const emojis = [
        { src: "/images/emo1.jpg", alt: "Happy" },
        { src: "/images/emo2.jpg", alt: "Sad" },
        { src: "/images/emo3.jpg", alt: "Angry" },
        { src: "/images/emo4.jpg", alt: "Thinking" },
        { src: "/images/emo5.jpg", alt: "Neutral" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        }, 2000); // Change emoji every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setIsDropdownActive(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="container">

            {/* Left Sidebar */}
            <aside className="sidebar1">
                <h2>Menu</h2>
                <ul>
                    <li><a href="#home"> Home</a></li>
                    <li><a href="#journal"> Journal</a></li>
                    <li><a href="#moods"> Moods</a></li>
                    <li><a href="#settings"> Settings</a></li>
                    <li><a href="#logout"> Logout</a></li>
                </ul>
            </aside>

            {/* Right Sidebar */}
            <aside className="sidebar-right">

                <h2>Your Journals</h2>
                <div className="dropdown">
                    <label htmlFor="sort">Sort Down Your Journals</label>
                    <select id="sort" defaultValue="">
                        <option value="" disabled>Sort By</option>
                        <option value="day">Daily Entries</option>
                        <option value="week">Weekly Entries</option>
                        <option value="month">Monthly Entries</option>
                    </select>
                </div>

                <div className="calendar-icons">
                <div className="calendar-icons">
                      📅 <br />
                      📅 <br />
                      📅 <br />
                      📅 <br />
                      📅 <br />
                </div>
                </div>
                
                <div class="entry">
                    <h2><a href="entry.html"> +  Add a new entry</a></h2> 
                </div>

            </aside>
            

            {/* Main Content */}
            <main className="content">
                <header>
                    <div class="centered">
                    <div className="center-container">
                        <h1>Welcome to Your Mood Journal</h1>
                    </div>
                    <p>Track your moods and thoughts here...</p>
                    </div>
                </header>

                {/* Emoji Carousel */}
                <section id="home">
                <div class="centered">
                    <div className="carousel-container">
                        <div className="carousel">
                            {emojis.map((emoji, index) => (
                                <img 
                                    key={index} 
                                    src={emoji.src} 
                                    alt={emoji.alt} 
                                    className={`emoji ${index === currentIndex ? 'active' : ''}`} 
                                />
                            ))}
                        </div>  
                    </div>
                </div>
                </section>
            </main>

        </div>



    );
}

export default App;
