# Amplify Gen2 Next.js クイックスタート

このプロジェクトは [AWS Amplify Gen2](https://docs.amplify.aws/gen2/) と [Next.js](https://nextjs.org/) を組み合わせたクイックスタートテンプレートです。Amplify Gen2のTypeScriptベースのインフラストラクチャ定義と、Next.jsのフロントエンドフレームワークを使用して、フルスタックアプリケーションを素早く構築できます。

## 機能

このクイックスタートには以下の機能が含まれています：

- **認証** - Amplify Authを使用したユーザー認証
- **データモデル** - Amplify Dataを使用したデータモデリングとAPI

## 前提条件

- [Node.js](https://nodejs.org/) (v18以上)
- [AWS アカウント](https://aws.amazon.com/)
- [AWS CLI](https://aws.amazon.com/cli/) (設定済み)

## セットアップ

1. 依存関係をインストールします：

```bash
yarn install
```

2. Amplify Gen2のバックエンドをローカルで実行します：

このコマンドによって開発のためのリソースがAWS上で立ち上がる

もし以下の環境セットアップを行なっていない場合は行うこと！

[Configure AWS for local development](https://docs.amplify.aws/react/start/account-setup/)

```bash
npx ampx sandbox
```

以下のようになっていればOK!

```bash

4:35:46 PM ✔ Backend synthesized in 0.83 seconds
4:35:50 PM ✔ Type checks completed in 4.34 seconds
4:35:51 PM ✔ Built and published assets
4:35:57 PM ✔ Deployment completed in 6.18 seconds
4:35:57 PM [Sandbox] Watching for file changes...
4:35:58 PM File written: amplify_outputs.json

```

3. 別のターミナルでNext.jsの開発サーバーを起動します：

```bash
yarn dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認します。

## プロジェクト構造

```
/
├── app/                  # Next.jsアプリケーションコード
│   ├── _components/      # 共有コンポーネント
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # メインページ
├── amplify/              # Amplify Gen2のバックエンド定義
│   ├── auth/             # 認証リソース
│   ├── data/             # データモデルリソース
│   └── backend.ts        # バックエンド定義
├── public/               # 静的アセット
└── ...
```

## デプロイ

Amplify Gen2を使用してAWSにデプロイするには：

1. バックエンドをデプロイします：

```bash
npx ampx deploy
```

2. フロントエンドをビルドします：

```bash
npm run build
```

3. Amplify Hostingを使用してデプロイするか、Next.jsアプリケーションを任意のホスティングサービスにデプロイできます。

## 学習リソース

- [Amplify Gen2 ドキュメント](https://docs.amplify.aws/gen2/)
- [Next.js ドキュメント](https://nextjs.org/docs)
- [Amplify UI コンポーネント](https://ui.docs.amplify.aws/)

## ローカル開発

```bash
# 開発サーバーの起動
npm run dev

# コードのフォーマット
npm run format

# 型チェック
npm run tsc
```

## ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。
