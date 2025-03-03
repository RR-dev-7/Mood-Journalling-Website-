import React from "react";
import "./Settings.css";


const Settings = () => {

    return (
        <div class="settings-container">
        <div class="profile-section">
            <div class="profile-pic"></div>
            <div class="profile-name">Profile Name</div>
        </div>
        <div class="setting-option">
            <span>Theme</span>
            <span>&gt;</span>
        </div>
        <div class="setting-option">
            <span>Font Size</span>
            <span>&gt;</span>
        </div>
        <div class="setting-option">
            <span>Notifications</span>
            <span>&gt;</span>
        </div>
        <div class="setting-option">
            <span>Privacy</span>
            <span>&gt;</span>
        </div>
        <div class="setting-option">
            <span>Sign Out</span>
            <span>&gt;</span>
        </div>
    </div>
    );
  };
  
  export default Settings;
  