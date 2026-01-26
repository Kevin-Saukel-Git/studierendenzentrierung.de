import { GetServerSideProps } from "next";
import { Tools } from "../data/Tool";

const SITE_URL = "https://studierendenzentrierung.de";

function generateSiteMap() {
	const staticPages = [
		{ url: "", changefreq: "weekly", priority: "1.0" },
		{ url: "/der-begriff", changefreq: "monthly", priority: "0.9" },
		{ url: "/toolbox/die-tools", changefreq: "weekly", priority: "0.9" },
		{ url: "/toolbox/einreichen", changefreq: "monthly", priority: "0.7" },
		{ url: "/toolbox/verfahren", changefreq: "monthly", priority: "0.7" },
		{ url: "/privacy-policy", changefreq: "yearly", priority: "0.5" },
		{ url: "/impressum", changefreq: "yearly", priority: "0.5" },
	];

	const toolPages = Tools.map((tool, index) => ({
		url: `/toolbox/${index}`,
		changefreq: "monthly",
		priority: "0.8",
		lastmod: tool.updatedAt.toISOString().split("T")[0],
	}));

	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
		.map(
			(page) => `
       <url>
           <loc>${SITE_URL}${page.url}</loc>
           <changefreq>${page.changefreq}</changefreq>
           <priority>${page.priority}</priority>
       </url>
     `
		)
		.join("")}
     ${toolPages
		.map(
			(page) => `
       <url>
           <loc>${SITE_URL}${page.url}</loc>
           <changefreq>${page.changefreq}</changefreq>
           <priority>${page.priority}</priority>
           ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
       </url>
     `
		)
		.join("")}
   </urlset>
 `;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap();

	res.setHeader("Content-Type", "text/xml");
	// we send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default SiteMap;
