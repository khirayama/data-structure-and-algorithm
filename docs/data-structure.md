---
title: 'データ構造'
description: 'データ構造'
thumbnail: ''
seo:
  title: 'データ構造'
  description: 'データ構造'
  thumbnail: ''
  keywords:
    - LeetCode
    - データ構造
    - アルゴリズム
created: '2021-08-17'
updated: '2021-08-17'
---

## 抽象データ型、配列、連結リスト、その他

### スタック

- LIFO(Last In, First Out)もしくはFILO(First In, Last Out)の構造
- 使用例
  - 深さ優先探索
  - 逆ポーランド記法

[スタック Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF)
:problems(stack)

### キュー

- FIFO(First In, First Out)の構造
- 使用例
  - 幅優先探索

[キュー Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A5%E3%83%BC_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF))
:problems(queue)

### 両端キュー

- あんま問題解くのには使わないかも
- 教養として知ってるといいかも
- 誤解を恐れずに言えば、スタックとキューの両方の動きができる構造

[両端キュー Wikipedia](https://ja.wikipedia.org/wiki/%E4%B8%A1%E7%AB%AF%E3%82%AD%E3%83%A5%E3%83%BC)

### 優先度付きキュー

- 追加したら、ソートされるキュー
- 実装が必要な場合は、二分探索して挿入していくとよい
- 振る舞いとしてはヒープとほぼ一緒
- ソートにも利用される
  - ヒープソート: ヒープで実装された優先度付きキュー
  - 選択ソート: 整列されてない配列で実装された優先度付きキュー
  - 挿入ソート: 整列された配列で実装された優先度付きキュー
- 使用例
  - ダイクストラ法
  - プリム法
  - 割り込み
  - ハフマン符号

[優先度付きキュー Wikipedia](https://ja.wikipedia.org/wiki/%E5%84%AA%E5%85%88%E5%BA%A6%E4%BB%98%E3%81%8D%E3%82%AD%E3%83%A5%E3%83%BC#%E5%BF%9C%E7%94%A8%E4%BE%8B)
:problems(heap-priority-queue)

### 連結リスト

- 任意のデータ構造が、次（もしくは前）のデータへの参照を持つ構造
- 次のみを持つ場合、単方向連結リスト
- 次と前を持つ場合、双方向連結リスト
- 配列と比べて、挿入削除が容易だが、列挙などが遅い
- 使用例
  - スタック
  - キュー

[連結リスト - Wikipedia](https://ja.wikipedia.org/wiki/%E9%80%A3%E7%B5%90%E3%83%AA%E3%82%B9%E3%83%88)
:problems(linked-list)
:problems(doubly-linked-list)

### セット 

- 重複データを持たない集合体
- 重複を許す場合、バグという
- 使用例
  - 重複排除

[セット (抽象データ型) Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%83%E3%83%88_(%E6%8A%BD%E8%B1%A1%E3%83%87%E3%83%BC%E3%82%BF%E5%9E%8B))
:problems(ordered-set)

### 素集合データ構造(Union-Find)

- グループとしてまとめ、同じグループかを判定する構造とアルゴリズム
- 木構造で現す場合、Union-Find木という
  - 木構造で深くすると効率が悪い場合も多いので、すべて根につなげる実装もある
- 使用例
  - クラスカル法
- 参考記事
  - [競プロ覚書：Union-Find まとめ - pyてよn日記](https://pyteyon.hatenablog.com/entry/2019/03/11/200000)

[素集合データ構造 Wikipedia](https://ja.wikipedia.org/wiki/%E7%B4%A0%E9%9B%86%E5%90%88%E3%83%87%E3%83%BC%E3%82%BF%E6%A7%8B%E9%80%A0)
:problems(union-find)


## 木構造

- ノードと言われると頂点と、エッジと言われる頂点間を結ぶ辺で構成される
- 親子関係のような有向なものは根付き木となる
- 根ノード、葉ノード、内部ノード、親ノード、子ノード、兄弟ノード、子孫ノード、先祖ノード、高さ、深さ、部分木、真部分木、森などの用語の理解しておく
- 走査
  - 深さ優先探索
    - 行きがけ順、通りがけ順、帰りがけ順
  - 幅優先探索

[木構造 (データ構造) Wikipedia](https://ja.wikipedia.org/wiki/%E6%9C%A8%E6%A7%8B%E9%80%A0_(%E3%83%87%E3%83%BC%E3%82%BF%E6%A7%8B%E9%80%A0))
:problems(tree)

### 二分木

[二分木 Wikipedia](https://ja.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%9C%A8)
:problems(binary-tree)

### 二分探索木

### 平衡二分木

### ヒープ

### トライ木


## ハッシュ

### 連想配列、マップ

- ハッシュテーブル


## グラフ

### グラフ

### 有向グラフ

### オイラー路

### オイラー閉路

### ハミルトン路

### ハミルトン閉路
