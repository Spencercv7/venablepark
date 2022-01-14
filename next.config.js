/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"cdn.sanity.io",
			"images.ctfassets.net",
			"res.cloudinary.com",
		],
	},
	reactStrictMode: true,
};

module.exports = nextConfig
