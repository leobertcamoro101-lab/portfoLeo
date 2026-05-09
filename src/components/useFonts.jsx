import { useEffect } from "react";

function useFonts() {
  useEffect(() => {
    if (document.getElementById("portfolio-fonts")) return;
    const link = document.createElement("link");
    link.id = "portfolio-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap";
    document.head.appendChild(link);
  }, []);
}

export default useFonts;