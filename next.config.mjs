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
        ],
    },
};

export default nextConfig;
