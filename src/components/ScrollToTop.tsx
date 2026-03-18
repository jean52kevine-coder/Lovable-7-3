import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, search, navigate]);

  return null;
};

export default ScrollToTop;
