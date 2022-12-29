import { useState, useLayoutEffect } from "react";
import axios from "axios";
import throttle from "../libs/throttle";

const useIntersectionObserve = (url) => {
  const [target, setTarget] = useState(null);
  const [itemLists, setItemLists] = useState([]);

  const nextItemId = itemLists[itemLists.length - 1]?.postId;

  const nextUrl = `${url}?p=${nextItemId}`;

  const getMoreItem = async () => {
    const data = await axios.get(nextUrl);
    setItemLists((itemLists) => itemLists.concat(data.data.result));
    if (nextItemId !== data.data.lastPost) {
      setItemLists((itemLists) => itemLists.concat(data.data.result));
    } else {
      return;
    }
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useLayoutEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(throttle(onIntersect, 100), {
        root: null,
        rootMargin: "1px",
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, itemLists]);

  return { itemLists, setTarget };
};

export default useIntersectionObserve;
