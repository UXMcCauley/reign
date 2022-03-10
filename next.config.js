/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["cloudflare-ipfs.com", "robohash.org", "reign.vercel.app"]
    },
    experimental: {
        urlImports: ["https://framer.com/m/", "https://framerusercontent.com/modules/"]
    }
}
