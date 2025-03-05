import React, { useState } from 'react';
import './mydiaries.css';

const diaryEntries = {
    '2025-02-22': 'This is a preview of the journal entry...',
    '2025-02-21': 'This is a preview of the journal entry...',
    '2025-02-20': 'This is a preview of the journal entry...',
    '2025-02-19': 'This is a preview of the journal entry...',
    '2025-02-18': 'This is a preview of the journal entry...',
    '2025-02-17': 'This is a preview of the journal entry...',
    '2025-02-16': 'This is a preview of the journal entry...',
    '2025-02-15': 'This is a preview of the journal entry...',
    '2025-02-14': 'This is a preview of the journal entry...',
    '2025-02-13': 'This is a preview of the journal entry...',
    '2025-02-12': 'This is a preview of the journal entry...',
    '2025-02-11': 'This is a preview of the journal entry...'
};

function MyDiaries() {
    const [filteredEntries, setFilteredEntries] = useState(diaryEntries);
    const [currentEntry, setCurrentEntry] = useState({ date: '', content: '' });
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = (date, content) => {
        setCurrentEntry({ date, content });
        setIsPopupVisible(true);
    };

    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    const saveEntry = () => {
        const updatedEntries = { ...diaryEntries, [currentEntry.date]: currentEntry.content };
        setFilteredEntries(updatedEntries);
        console.log('Entry saved:', currentEntry.content);
        alert('Entry saved successfully!');
        hidePopup();
    };

    const filterEntries = (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filtered = Object.keys(diaryEntries)
            .filter(date => date.toLowerCase().includes(searchValue))
            .reduce((obj, key) => {
                obj[key] = diaryEntries[key];
                return obj;
            }, {});
        setFilteredEntries(filtered);
    };

    return (
        <div>
            <h1>My Diaries</h1>
            <div className="header-controls">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search by date..."
                    onInput={filterEntries}
                />
            </div>
            <div className="diaries-container" id="diariesContainer">
                {Object.keys(filteredEntries).map(date => (
                    <div
                        key={date}
                        className="diary-block"
                        onClick={() => showPopup(date, filteredEntries[date])}
                    >
                        <div className="diary-date">{date}</div>
                        <div className="diary-preview">{filteredEntries[date]}</div>
                    </div>
                ))}
            </div>
            {isPopupVisible && (
                <div className="popup-overlay" id="popupOverlay">
                    <div className="popup-window" id="popupWindow">
                        <button className="close-popup" onClick={hidePopup}>Close</button>
                        <h2 id="popupDate">{currentEntry.date}</h2>
                        <textarea
                            id="popupContent"
                            className="popupContent"
                            rows="10"
                            placeholder="Enter your journal entry here..."
                            value={currentEntry.content}
                            onChange={(e) => setCurrentEntry({ ...currentEntry, content: e.target.value })}
                        />
                        <button className="save-popup" onClick={saveEntry}>Save</button>
                        <div className="mood-meter">
                            <span>Mood Meter: <span id="moodValue">8/10</span></span>
                            {/* Replace the static value with dynamic value based on journal analysis */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyDiaries;
