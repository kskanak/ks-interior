import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Ks Interior / ${title}`;
  }, [title]);
};
export default useTitle;
