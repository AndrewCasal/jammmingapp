import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name: 'name1', artist:'artist1', album: 'album1', id:1}, {name: 'name2', artist:'artist2', album: 'album2', id:2}, {name: 'name3', artist:'artist3', album: 'album3', id:3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'playlistName1', artist:'playlistArtist1', album: 'playlistAlbum1', id:1}, {name: 'playlistName2', artist:'playlistArtist2', album: 'playlistAlbum2', id:2}, {name: 'playlistName3', artist:'playlistArtist3', album: 'playlistAlbum3', id:3}]
    }
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
      );
    }
  }

export default App;
