# 第1週: 環境を準備して、サイトを公開する

## 今週のゴール

自分のサイトがインターネットに公開され、URL を開くと「たびプラン」が表示される。

## 用意するもの

- GitHub のアカウント（事前に作成済みのもの）
- 講師から届いた Claude の招待メール

## 1. 自分のリポジトリを作る（5分）

リポジトリは「サイトのファイル一式を入れておく箱」です。

1. テンプレート（講師から案内された URL）を開く
2. 右上の緑色の **Use this template** →「Create a new repository」
3. Repository name に `travel-plans` と入れる
4. **Private** を選ぶ
5. 「Create repository」を押す

## 2. Codespaces を開く（5分）

Codespaces は「ブラウザの中で動く作業部屋」です。パソコンに何もインストールしなくて大丈夫です。

1. 自分のリポジトリの画面で緑色の **Code** ボタン →「Codespaces」タブ
2. 「Create codespace on main」を押す
3. 準備に数分かかります。画面の右下に日本語化の案内が出たら「Install and Restart」を押す

> 次の回からは、GitHub の右上のメニュー →「Your codespaces」から同じ作業部屋を開けます。

## 3. Claude にログインする（5分）

1. 画面の下の方にある「ターミナル」をクリックする（見当たらなければ、上のメニュー →「ターミナル」→「新しいターミナル」）
2. `claude` と入力して Enter
3. 表示される案内に沿って進める。ログイン方法を聞かれたら、Claude アカウント（招待メールのもの）を選ぶ
4. 表示された URL を開いてログインし、画面に出たコードをターミナルに貼り付ける
5. 「Welcome」のような表示が出て、入力欄が出たら準備完了です

## 4. サイトを動かしてみる（5分）

ターミナルの Claude に、次のように頼んでみましょう。

```
サイトを起動して
```

右側にプレビューが開き、「次の休みは、どこへ行こう。」と表示されれば成功です。開かなければ、Claude に「プレビューの開き方を教えて」と聞いてください。

## 5. Vercel で公開する（10分）

Vercel は「サイトをインターネットに公開してくれるサービス」です。

1. https://vercel.com/signup を開く
2. プランは **Hobby** を選び、名前を入れる
3. 「Continue with GitHub」で GitHub アカウントでサインアップする
4. 「Add New…」→「Project」
5. 「Import Git Repository」に自分の `travel-plans` が出るので「Import」（出ない場合は「Adjust GitHub App Permissions」から追加する）
6. 設定は変えずに「Deploy」
7. 1〜2分待つと完了画面が出ます。「Continue to Dashboard」→ 表示された URL（`https://travel-plans-xxxx.vercel.app` のような形）を開く

## 6. 提出する

第1週だけは PR ではなく、**本番 URL** を提出フォーム（講師から案内）に送ってください。

## 今週わかったこと

| 言葉 | 意味 |
| --- | --- |
| リポジトリ | サイトのファイル一式を入れておく箱（GitHub にある） |
| Codespaces | ブラウザの中の作業部屋。ここで Claude に頼む |
| Vercel | リポジトリの中身を、インターネットに公開してくれるサービス |

## つまずいたら

- Codespaces が開かない、Claude にログインできない → [troubleshooting.md](troubleshooting.md)
