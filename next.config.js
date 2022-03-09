/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["cloudflare-ipfs.com", "robohash.org", "reign.vercel.app"]
    },
    experimental: {
        urlImports: ["https://framer.com/m/", "https://framerusercontent.com/modules/"]
    }, async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboards/executive-summary',
                permanent: true,
            },
        ]
    },
}
