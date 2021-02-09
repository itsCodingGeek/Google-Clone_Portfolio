import { useEffect, useState } from "react";
import { API_KEY } from "./api_key";
import CONTEXT_KEY from "./context_key";

const useGoogleSearch = (term) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
