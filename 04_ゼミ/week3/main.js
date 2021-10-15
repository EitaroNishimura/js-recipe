const input = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
let memos = []
if (localStorage.memos) {
  // ローカルストレージのmemosキーからJSONを読み込む。
  const memosJson = localStorage.memos
  // JSON.parseで配列にして、memosを更新する。
  memos = JSON.parse(memosJson)

  // ページ読み込み時に、配列の内容をブラウザに反映する。
  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    memoContainer.append(div)
  }
}

addButton.onclick = function() {
  memos.push(input.value)
  localStorage.memos = JSON.stringify(memos)
  console.log(memos)
  memoContainer.innerHTML = ""
  for (let i = 0; i < memos.length; i++) {
    const memo = document.createElement("div")
    memo.textContent = memos[i]
    memoContainer.append(memo)
  }
  input.value = ""
  //const card = createCard(input.value);
  //memoContainer.append(card);

  //input.value = "";
}

// const createCard = function (text) {
//   const card = document.createElement("div");
//   card.textContent = text;
//   card.className = "card";

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "削除";
//   deleteButton.onclick = function () {
//     card.remove();
//   };
//   card.append(deleteButton);

//   return card;
// };
