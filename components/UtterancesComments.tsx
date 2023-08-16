import React from "react";

const UtterancesComments: React.FC = () => {
  const REPO_NAME = "HustleCoding/my-portfolio";

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("repo", REPO_NAME);
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");

    const scriptParentNode = document.getElementById("utterances-container");

    if (scriptParentNode) {
      scriptParentNode.appendChild(script);
    }

    return () => {
      if (scriptParentNode) {
        scriptParentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="utterances-container"></div>;
};

export default UtterancesComments;
