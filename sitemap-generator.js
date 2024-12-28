const Sitemap = require("react-router-sitemap").default;
const router = require("./src/App").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://www.michalblachownia.pl")
    .save("./public/sitemap.xml");
}

generateSitemap();
