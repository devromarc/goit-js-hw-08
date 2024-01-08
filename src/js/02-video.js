// Add the library as a project dependency via npm.
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Initialize the player in the script file as described in the pre-existing player section, but note that you have added the player as an npm package, not via CDN.
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onHandleThrottle = data => {
  const timeInSec = data.seconds;
  //   console.log(timeInSec);
  //   Save playback time to local storage. Let the key for the storage be the "videoplayer-current-time" string.
  localStorage.setItem('videoplayer-current-time', timeInSec);
};
// Read the documentation of the on() method and start tracking the timeupdate event - playback time update.
// Add the lodash.throttle library to the project and make sure that the playback time is updated in the storage once a second or less frequent.
player.on('timeupdate', throttle(onHandleThrottle, 1000));

// When reloading the page, use the setCurrentTime() method to resume playback from the saved position.
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
