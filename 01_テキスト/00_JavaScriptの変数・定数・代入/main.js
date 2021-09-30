// * let キーワードを使って、hensu という名前の変数を宣言する
let hensu

// 変数には値を代入（割り当て）できる
hensu = 42
console.log(hensu)

// 変数には値を再代入できる
hensu = 100
console.log(100)

// * 多くの場合、変数には宣言と同時に値を代入する
let hensu2 = 42
console.log(hensu2)

// * const キーワードを使うと、定数になる
const teisu = 42
console.log(teisu)

let x = 5
console.log(x)
x += 2
console.log(x)
x *= 5
console.log(x)
x = 100 % x
console.log(x)
x /= 6
console.log(x)

console.log(1 === "1")

console.log(1 + 2 * 3)
console.log(2 < 5 && 5 < 10)
console.log((1 + 2) * 3)
console.log(-10 < -5 < -1)
console.log(-10 < -5 && -5 < -1)

// 定数には値を再代入できない
teisu = 100 // エラー

// * 変数や定数の名前はだいたい自由に決められるが、-（ハイフン）が使えなかったり、最初の文字に数字が使えなかったりする
let namae
// let my-name // だめ
// let 1banme // だめ

// 複数の単語を組み合わせるときは、ふたつめ以降の単語の最初の文字を大文字にしてくっつけることが多い
// このような書き方をキャメルケースという（大文字がキャメル＝ラクダのこぶにみえることから）
let camelCase // camel + case
