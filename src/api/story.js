const HN_BASE_URL = "http://hn.algolia.com/api/v1/search?query=";

const fetchStories = query =>
  fetch(HN_BASE_URL + query).then(res => res.json());

export { fetchStories };
