import React from 'react';
import {Track} from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track />
            </div>
        )
    }
}

export default TrackList;