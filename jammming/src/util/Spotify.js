let userAccessToken;

const Spotify = {

    getAccessToken() {
        if(userAccessToken) {
            return userAccessToken
        }

        const accessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    }
}

export default Spotify;