import { useEffect, useState } from "react";
import _ from "lodash";
const usePaginateFetch = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paginateData = _.chunk(data, pageSize);
    setData(paginateData);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return [loading, data];
};

export default usePaginateFetch;
