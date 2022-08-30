import React from 'react';

class LoadingScreen extends React.Componenet {
    render() {
        return (
            <div className="loading_page">
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <h2 className="loading_title">Your New Playlist is Saving!</h2>
            </div>
        );
    }
}

export default LoadingScreen;