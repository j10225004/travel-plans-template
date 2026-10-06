import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Codespaces のプレビュー（*.app.github.dev）から開発サーバーを開けるようにする
  allowedDevOrigins: ["*.app.github.dev"],
};

export default nextConfig;
