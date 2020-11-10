const youtubeAPIkey = "AIzaSyBgEdkUbHxjy56Ij2mu4mZMfMc7I8pL280";

const queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPIkey}&type=video&q=${userData}`;

if (fallback) {
  // get random index from fallback choices
  const randIndex = Math.floor(Math.random() * 3);
  videoID = fallbackVideos[userData][randIndex];
} else {
  $.ajax({
    url: queryURL,
    method: "GET"
    //after the data from the AJAX request comes back
  }).then(response => {
    // Console log info from 5 videos
    console.log(response);
    //log first videos ID
    console.log(response.items[0].id.videoId);
    // $("#youtube").attr("src", "https://www.youtube.com/embed/Xi28pEbMdTw");
  });
}
