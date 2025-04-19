"use strict";
// 2. 自己紹介を拡張する関数
function appendUserInfo(user) {
    // getElementById の戻り値は HTMLElement|null
    const intro = document.getElementById("intro-text");
    // 型ガードを使って null を除外する
    // TypeScript では、null の場合は何もしないようにする
    if (!intro)
        return; // 要素が無ければ何もしない
    intro.innerHTML += `<br>（TypeScriptで追加: ${user.name}さん、${user.age}歳）`;
    // ここで user.name と user.age は User 型として扱える
    // 例えば、user.name = "山田"; とするとエラーになる
}
// 3. ページ読み込み後に呼び出す
window.addEventListener("DOMContentLoaded", () => {
    const user = { name: "田中太郎", age: 28 };
    appendUserInfo(user);
});
