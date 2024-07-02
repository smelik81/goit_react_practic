import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const getArticlesApi = async (searchQuery, page) => {
  const { data } = await axios.get("/search", {
    params: {
      query: searchQuery,
      hitsPerPage: 7,
      page,
    },
  });
  return data;
};
