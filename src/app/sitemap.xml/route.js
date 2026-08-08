export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://waterpurifiermanufacturer.com";

  try {
    const res = await fetch(`${baseUrl}/api/product`, {
      cache: "no-store",
    });

    const data = await res.json();
    const products = data.products || [];

    // ✅ Filter
    const rocabinet = products.filter(
      (item) => item.category?.name === "RO CABINET",
    );
    const spareparts = products.filter(
      (item) => item.category?.name === "SPARE PARTS",
    );

    // ✅ Generate RO URLs
    const roUrls = rocabinet
      .map(
        (product) => `
      <url>
        <loc>${baseUrl}/products/ro-cabinet/${product.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`,
      )
      .join("");

    const spareUrls = spareparts
      .map(
        (product) => `
      <url>
        <loc>${baseUrl}/products/spare-parts/${product.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`,
      )
      .join("");

    // ✅ Static pages
    const staticPages = [
      "/about",
      "/contact",
      "/blogs",
      "/products",
      "/products/ro-cabinet",
      "/products/spareparts",
      "/privacy-policy",
      "/terms-conditions",
      "/terms-conditions",
      "/return-refund",
      "/shipping",
      "/faq",
    ]
      .map(
        (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>`,
      )
      .join("");

    // ✅ Homepage
    const homepage = `
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    `;

    // ✅ Final sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${homepage}
      ${staticPages}
      ${roUrls}
      ${spareUrls}
    </urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.log(error);

    return new Response("Error generating sitemap", {
      status: 500,
    });
  }
}
