import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	basePath: process.env.GITHUB_REPO_NAME
		? `/${process.env.GITHUB_REPO_NAME}`
		: undefined,
};

export default nextConfig;
