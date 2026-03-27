import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CanonicalPathRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const normalizedPath = pathname.replace(/\/+$/, "");
      navigate(`${normalizedPath}${search}${hash}`, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return null;
};

export default CanonicalPathRedirect;
