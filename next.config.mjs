import { withPayload } from '@payloadcms/next/withPayload';
import bundleAnalyser from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyser({
  enabled: process.env.ANALYSE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({});

export default withPayload(nextConfig);
