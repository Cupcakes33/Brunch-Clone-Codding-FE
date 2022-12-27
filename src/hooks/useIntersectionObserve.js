import { useEffect, useState } from "react";
import axios from "axios";
import throttle from "../libs/throttle";

const useIntersectionObserve = (url) => {
  const [target, setTarget] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);

  const next = itemLists[itemLists.length - 1]?.postId;
  console.log(itemLists);
  console.log(next);

  const nextUrl = `${url}?p=${next}`;
  const getMoreItem = async () => {
    const data = await axios.get(nextUrl);
    setItemLists((itemLists) => itemLists.concat(data.data.result));
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
  }, [target, itemLists]);

  return { itemLists, setTarget };
};

export default useIntersectionObserve;
