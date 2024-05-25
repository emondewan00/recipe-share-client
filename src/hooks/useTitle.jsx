import { useEffect } from "react";

const useTitle = ({ title }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const titleEle = document.createElement("title");
    titleEle.innerHTML = title;
    head.appendChild(titleEle);

    return () => {
      head.removeChild(titleEle);
    };
  }, [title]);

  return null;
};

export default useTitle;
