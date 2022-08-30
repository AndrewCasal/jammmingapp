import React from 'react';

class LoadingScreen extends React.Component {
    playlistStatus() {
        if(playlistTracks.id) {

        } else {
            return alert('No songs saved to your new playlist!');
        }
    }
    
    // For the render need to figure out to get the playlistName in the comment //

    render() {
        return (
            <div className="loading_box">
                <h1>Your  is being Saved!</h1>
            </div>

        );
    }
}

export default LoadingScreen;