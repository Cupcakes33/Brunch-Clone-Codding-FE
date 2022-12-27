import { useEffect, useState } from "react";
import axios from "axios";

const useIntersectionObserve = (url) => {
  const [target, setTarget] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);

  useEffect(() => {
    console.log(itemLists);
  }, [itemLists]);

  const getMoreItem = async () => {
    // setIsLoaded(true);

    const data = await axios.get(url);
    console.log(data);

    setItemLists((itemLists) => itemLists.concat(data.data.results));
    // setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    // if (entry.isIntersecting && !isLoaded) {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return { itemLists, setTarget };
};

export default useIntersectionObserve;
