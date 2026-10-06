import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "たびプラン",
  description: "旅行プラン紹介サイト（Claude Code 演習用）",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="container site-header__inner">
            <Link href="/" className="site-header__logo">
              たびプラン
            </Link>
            <nav className="site-header__nav">
              <Link href="/">トップ</Link>
              <Link href="/plans">プラン一覧</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">© たびプラン（演習用のサンプルサイトです）</div>
        </footer>
      </body>
    </html>
  );
}
