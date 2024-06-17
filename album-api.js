const baseUrl = "https://jsonplaceholder.typicode.com";
const container = document.getElementById('container');
const getAlbums = async () => {
  const albumData = await fetch(`${baseUrl}/albums/1/photos`, {
    metod: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      const result = await response.json();
      return result;
    })
    .catch((error) => {
      throw new Error(error.message);
    }); //returns a promise
  console.log({ albumData });
  albumData.forEach(item => {
        const singleAlbumContainer = document.createElement('div');
        singleAlbumContainer.setAttribute("key", item.id);
        singleAlbumContainer.setAttribute("class", "single-album-container");
        const image = document.createElement("img");
        image.src = item.url;
        const title = document.createElement("h3");
        title.innerHTML = item.title;
        singleAlbumContainer.appendChild(image);
        singleAlbumContainer.appendChild(title);
        container.appendChild(singleAlbumContainer);
  });
};
document.addEventListener("DOMContentLoaded", getAlbums);





















