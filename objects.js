var playlist = new Object({artist: "song"});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Slowdive"] = "Alison"
  playlist["My Bloody Valentine"] = "Sometimes"
  playlist["Here's to the State of Mississippi"] = "Phil Ochs"
  return playlist
}

updatePlaylist(playlist, artistName, songTitle);