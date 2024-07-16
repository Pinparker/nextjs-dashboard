/** @type {import('next').NextConfig} */
 
const nextConfig = {
    // 部分预渲染
    experimental: {
      ppr: 'incremental',
    },
  };
   
  export default nextConfig;