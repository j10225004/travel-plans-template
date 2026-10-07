# 困ったときは

まずは Claude に、起きていることをそのまま伝えてみてください。

```
（エラーの文や、画面に出ている文をそのまま貼る）
これが出ている。何が起きているか、やさしく説明して。直し方も教えて。
```

それでも解決しないときは、下の表を見てください。

## Codespaces

| 症状 | 対処 |
| --- | --- |
| 作業部屋がどこにあるか分からない | GitHub 右上のアイコン →「Your codespaces」。または https://github.com/codespaces |
| 「停止しました」と出る | しばらく操作しないと自動で止まります。「Restart codespace」を押せば、作業内容はそのまま戻ります |
| 作業部屋が消えた | 長く使わないと削除されます。push していた内容は GitHub に残っているので、リポジトリから「Create codespace on main」で作り直します |
| 無料の利用時間が心配 | 使い終わったら「Your codespaces」→ 右の「…」→「Stop codespace」で止めます |

## Claude Code

| 症状 | 対処 |
| --- | --- |
| `claude` と打つと「command not found」と出る | [week01.md の「3. Claude Code が入っているか確かめる」](week01.md#3-claude-code-が入っているか確かめる2分)の手順で入れます。公式の入れ方 `curl -fsSL https://claude.ai/install.sh \| bash` を実行し、新しいターミナルを開いてから `claude --version` で確かめます |
| 入れたのに、まだ「command not found」と出る | `echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc` を実行し、新しいターミナルを開きます。それでもだめなら `npm install -g @anthropic-ai/claude-code`（もう一つの公式の入れ方）を試します |
| 起動時に「自動更新できない」というお知らせが出る | 使うのに問題はありません。最新にしたいときは `claude update` と入力します |
| ログインできない | 招待メールのアカウントでログインしているか確認します。だめなら講師へ |
| 返事がおかしい・同じことを繰り返す | `/clear` と入力して会話をリセットし、やりたいことを最初から伝え直します |
| 終わり方が分からない | `/exit` と入力するか、Ctrl + C を2回押します |

## プレビュー・Vercel

| 症状 | 対処 |
| --- | --- |
| Codespaces のプレビューが開かない | 下の「ポート」タブで 3000 番の地球儀アイコンを押します |
| プレビューに悲しい顔のアイコンが出る | Codespaces の画面の中（シンプル ブラウザー）では表示できないことがあります。「ポート」タブで 3000 番の地球儀アイコンを押し、ブラウザの新しいタブで開きます |
| 「localhost:3000 で動いています」と言われたが開けない | `localhost` は Codespaces の中だけの住所です。「ポート」タブで 3000 番の地球儀アイコンを押すか、Claude に「Codespaces で開ける URL を表示して」と頼みます |
| PR に Vercel のコメントが出ない | 数分待ちます。出なければ Vercel のダッシュボードでプロジェクトを開き、「Deployments」を確認します |
| Vercel で「Build Failed」 | Claude に「Vercel のビルドが失敗した。ログはこれ:（ログを貼る）」と伝えます |
| 本番に変更が出ない | PR をマージしたか確認します。マージ後、反映まで1〜2分かかります |

## Supabase（第5週から）

| 症状 | 対処 |
| --- | --- |
| 久しぶりに開いたらデータが出ない | 無料プランは、しばらくアクセスがないと一時停止します。Supabase のダッシュボードでプロジェクトを開き、「Restore project」を押します |
| 「Supabase の接続情報がありません」と出る | `.env.local`（Codespaces）または Vercel の環境変数に、2つの値が入っているか確認します |
| 「permission denied」「row-level security」と出る | RLS で許可していない操作です。何をしようとしたかと一緒に Claude に伝えます。RLS をゆるめる前に講師に相談してください |
| SQL を実行したら「already exists」と出る | その表はもう作られています。同じ SQL を2回実行する必要はありません |

## 研修が終わったら

研修後に使い続けない場合は、次の3つを削除してください。

1. **GitHub のリポジトリ**: 自分の `travel-plans` →「Settings」→ 一番下の「Delete this repository」
2. **Vercel のプロジェクト**: プロジェクト →「Settings」→「General」の一番下 →「Delete Project」
3. **Supabase のプロジェクト**: プロジェクト →「Project Settings」→「General」の一番下 →「Delete project」

Codespaces も「Your codespaces」から削除しておきましょう。
