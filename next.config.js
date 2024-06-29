/** @type {import('next').NextConfig} */
/*const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
}

module.exports = nextConfig*/

module.exports = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ru-msk-dr3-1.store.cloud.mts.ru',
                port: '',
                pathname: '/mave/storage/podcasts/**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/ocappellaRSS",
                destination: "https://cloud.mave.digital/42223",
            },
            {
                source: "/aliensRSS",
                destination: "https://cloud.mave.digital/53379",
            },
        ]
    },
}
/*
module.exports = () => {
    const rewrites = () => {
        return [
            {
                source: "/ocappellaRSS",
                destination: "https://cloud.mave.digital/42223",
            },
            {
                source: "/aliensRSS",
                destination: "https://cloud.mave.digital/53379",
            },
        ];
    };
    return {
        rewrites,
    };
};*/