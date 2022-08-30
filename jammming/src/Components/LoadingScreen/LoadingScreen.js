import React from 'react';

class LoadingScreen extends React.Componenet {
    render() {
        return (
            <div className="loading_page">
                <h1 className="loading_title">Your New Playlist is Saving!</h1>
            </div>
        );
    }
}

export default LoadingScreen;