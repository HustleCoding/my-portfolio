import React, { useEffect, useRef } from "react";

const UtterancesComments: React.FC = () => {
  const commentsContainerRef = useRef(null);
  const REPO_NAME = "HustleCoding/my-portfolio";

  useEffect(() => {
    const scriptParentNode = commentsContainerRef.current;
    if (!scriptParentNode) return;

    const existingScript = Array.from(scriptParentNode.childNodes).find(
      (child: any) => child.tagName === "SCRIPT"
    );

    if (existingScript) return;

    let script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", REPO_NAME);
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");

    scriptParentNode.appendChild(script);
  }, []);

  return <div ref={commentsContainerRef}></div>;
};

export default UtterancesComments;
