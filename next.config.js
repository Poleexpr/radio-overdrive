/** @type {import('next').NextConfig} */
/*const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
}

module.exports = nextConfig*/

module.exports = () => {
    const rewrites = () => {
        return [
            {
                source: "/ocappellaRSS",
                destination: "https://cloud.mave.digital/42223",
            },
            {
                source: "/prishelcy",
                destination: "https://cloud.mave.digital/53379",
            },
        ];
    };
    return {
        rewrites,
    };
};