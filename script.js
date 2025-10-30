function fetchData() {
  const url = document.getElementById('videoUrl').value.trim();
  const match = url.match(/(?:v=|be\/|shorts\/)([\w-]{11})/);

  if (!match) {
    alert('Please enter a valid YouTube or Shorts URL!');
    return;
  }

  const videoId = match[1];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoDownloadUrl = `https://ssyoutube.com/watch?v=${videoId}`;


  document.getElementById('result').innerHTML = `
    <h3>Preview</h3>
    <img src="${thumbnailUrl}" alt="Thumbnail" />
    <div class="download-buttons">
      <a href="${thumbnailUrl}" download>Download Thumbnail</a>
      <a href="${videoDownloadUrl}" target="_blank">Download Video</a>
    </div>
  `;
}