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
| `claude` と打っても動かない | ターミナルで `npm install -g @anthropic-ai/claude-code` を実行してから、もう一度 `claude` |
| ログインできない | 招待メールのアカウントでログインしているか確認します。だめなら講師へ |
| 返事がおかしい・同じことを繰り返す | `/clear` と入力して会話をリセットし、やりたいことを最初から伝え直します |
| 終わり方が分からない | `/exit` と入力するか、Ctrl + C を2回押します |

## プレビュー・Vercel

| 症状 | 対処 |
| --- | --- |
| Codespaces のプレビューが開かない | 下の「ポート」タブで 3000 番の地球儀アイコンを押します |
| PR に Vercel のコメントが出ない | 数分待ちます。出なければ Vercel のダッシュボードでプロジェクトを開き、「Deployments」を確認します |
| Vercel で「Build Failed」 | Claude に「Vercel のビルドが失敗した。ログはこれ:（ログを貼る）」と伝えます |
| 本番に変更が出ない | PR をマージしたか確認します。マージ後、反映まで1〜2分かかります |

## Supabase（第5週から）

| 症状 | 対処 |
| --- | --- |
| 久しぶりに開いたらデータが出ない | 無料プランは、しばらくアクセスがないと一時停止します。Supabase のダッシュボードでプロジェクトを開き、「Restore project」を押します |

## 研修が終わったら

研修後に使い続けない場合は、次の3つを削除してください。

1. **GitHub のリポジトリ**: 自分の `travel-plans` →「Settings」→ 一番下の「Delete this repository」
2. **Vercel のプロジェクト**: プロジェクト →「Settings」→「General」の一番下 →「Delete Project」
3. **Supabase のプロジェクト**: プロジェクト →「Project Settings」→「General」の一番下 →「Delete project」

Codespaces も「Your codespaces」から削除しておきましょう。
