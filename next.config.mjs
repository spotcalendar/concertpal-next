/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "dt8dif07ddviy.cloudfront.net",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "1000logos.net",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "static.ebayinc.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "cdn.prod.website-files.com",
                port: "",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
