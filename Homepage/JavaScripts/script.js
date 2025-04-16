// ページ読み込み後に実行
document.addEventListener("DOMContentLoaded", function () {
    // ボタン要素を取得
    const changeTextButton = document.getElementById("change-text");
    // 自己紹介文の<p>要素を取得
    const introText = document.getElementById("intro-text");

    // ボタンにクリックイベントを追加
    changeTextButton.addEventListener("click", function () {
        // 新しい自己紹介文に変更
        introText.textContent = "こんにちは！私はWeb開発とデザインに情熱を持って取り組んでいます。日々、新しい技術に挑戦中です！";
    });
});
