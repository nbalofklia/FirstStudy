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

$(function () {
    // ボタンで色を切り替え
    $("#change-text").click(function () {
        $("#intro-text").css("color", "#E91E63");
    });

    // 3カラムのコンテンツをフェードイン
    $(".grid-3 .card").hide().each(function (index) {
        $(this).delay(200 * index).fadeIn(400);
    });

    // JSON 取得例
    $.get("../data/info.json", function (res) {
        // 取得したデータを表示
        $("#info-area").text(res.message);
        // コンソールにも出して確認
        console.log("取得した JSON:", res);
    });
});

// スクロールでヘッダーの色を変更
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $("header").css("background-color", "#333");
//     } else {
//         $("header").css("background-color", "#333");
//     }
// });

//--- 1. 簡単電卓関数 ---
function calculate(x, y, op) {
    x = Number(x);
    y = Number(y);
    switch (op) {
        case "+": return x + y;
        case "-": return x - y;
        case "*": return x * y;
        case "/": return y !== 0 ? x / y : "∞（0除算）";
        default: return NaN;
    }
}

//--- 2. 偶数抽出関数 ---
function filterEvens(arr) {
    return arr.filter(function (n) {
        return n % 2 === 0;
    });
}

//--- 3. 年齢判定関数 ---
function checkAdult(age) {
    age = Number(age);
    if (isNaN(age)) return "年齢を正しく入力してください";
    return age >= 18 ? "成人です" : "未成年です";
}

//--- 4. 関数合成関数 ---
function increment(n) { return n + 1; }
function double(n) { return n * 2; }
function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}
const incThenDouble = compose(double, increment);

//--- イベント設定 ---
document.addEventListener("DOMContentLoaded", function () {
    // 1. 電卓
    document.getElementById("calc-btn").addEventListener("click", function () {
        // 入力値を取。数値を取得し、演算子を取得
        const x = document.getElementById("calc-x").value;
        const op = document.getElementById("calc-op").value;
        const y = document.getElementById("calc-y").value;
        document.getElementById("calc-result").textContent = calculate(x, y, op);
    });

    // 2. 偶数フィルター
    const orig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // 元の配列を表示
    document.getElementById("orig-array").textContent = orig.join(", ");
    // 偶数フィルターのボタンにイベントを追加
    document.getElementById("filter-btn").addEventListener("click", function () {
        // フィルターを実行
        const evens = filterEvens(orig);
        // フィルター後の配列を表示
        document.getElementById("filtered-array").textContent = evens.join(", ");
    });

    // 3. 年齢チェック
    document.getElementById("age-btn").addEventListener("click", function () {
        // 年齢入力を取得
        const age = document.getElementById("age-input").value;
        // 年齢チェックを実行
        document.getElementById("age-result").textContent = checkAdult(age);
    });

    // 4. 関数合成
    document.getElementById("comp-btn").addEventListener("click", function () {
        // 入力値を取得
        const n = document.getElementById("comp-input").value;
        // 関数合成を実行
        document.getElementById("comp-result").textContent = incThenDouble(Number(n));
    });
});
