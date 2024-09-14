const apiKey = "eHT0H-ozY3HXLbyPY09dbDFqzcXHrrRpUOEFIPfvDj0";

class picturesApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = `https://api.unsplash.com/`;
  }

  async getPictures(query) {
    const responsePicture = await axios.get(
      `${this.baseUrl}search/photos?client_id=${apiKey}&query=${query}&per_page=30`
    );

    const PictureData = responsePicture.data.results;
    return PictureData;
  }
}
