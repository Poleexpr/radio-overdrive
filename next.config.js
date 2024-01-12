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
                source: "/ocappella",
                destination: "https://cloud.mave.digital/42223",
            },
            {
                source: "/ducks",
                destination: "https://random-d.uk/api/random",
            },
        ];
    };
    return {
        rewrites,
    };
};