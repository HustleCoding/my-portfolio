import { useEffect } from "react";

const useGoogleAnalytics = (trackingId: string) => {
  useEffect(() => {
    if (window["ga"] || !trackingId) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    window["dataLayer"] = window["dataLayer"] || [];
    window["gtag"] = function () {
      window["dataLayer"].push(arguments);
    };
    window["gtag"]("js", new Date());
    window["gtag"]("config", trackingId);
  }, [trackingId]);
};

export default useGoogleAnalytics;
