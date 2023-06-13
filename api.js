import axios from "axios";

const searchImages = async (term) => {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID phCO10ofC-kQJ0LucWzph4d9jW1KKujGsUpUm-BLars",
      },
      params: {
        query: term,
      },
    });
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default searchImages;
