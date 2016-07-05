# Page Slider (JavaScript)

Web サイトのページ遷移に左右のスライドアクションをつける JavaScript ライブラリ。

## 入手

[Release](https://github.com/FujiHaruka/page-slider/releases) からどうぞ。

## 使い方

HTML ファイル内で `page_slider.js` を読み込んで、クラスを指定するだけ。

#### 1. HTML ファイル内で読み込む

head 要素内に以下を書く。

```html
<script type="text/javascript" src="page_slider.js"></script>
```

#### 2. リンクのページ遷移アクションをつける

a 要素のクラスを "page-slider-to-left" または "page-slider-to-right" にする。

```html
<a class="page-slider-to-left"  href="right.html">右のページヘ</a>
<a class="page-slider-to-right" href="left.html">左のページヘ</a>
```

ページ遷移アクションの対象となる要素のクラスを "page-slider-sliding-section" にする。

```html
<div class="page-slider-sliding-section">
  ここに挟まれたすべての要素が、ページ遷移時にスライドする。
</div>
```

#### 3. ページのロード時のページ遷移アクションをつける

アクションをつけたい要素のクラスを "page-slider-from-right" または "page-slider-from-left" にする。

```html
<div class="page-slider-from-right">
  ここに挟まれたすべての要素が、ページのロード時に右から来る。
</div>
```

```html
<div class="page-slider-from-left">
  ここに挟まれたすべての要素が、ページのロード時に左から来る。
</div>
```

## デモ

[デモページ](https://FujiHaruka.github.io/page-slider/demo/left.html)
