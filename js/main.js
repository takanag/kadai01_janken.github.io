    // プレーヤー
    const players = [
    {name: 'Player 1', lastCard: null },
    {name: 'Player 2', lastCard: null }
    ];
    let matchCount = 0;

    // 1～3のカードをランダムに引く
    function drawCard() {
        return Math.floor(Math.random() * 3) + 1; // 1～3の数字を返す
    }

    // 1～3のカードに対応する画像のパスを取得
    function getCardImage(cardNumber) {
        return `card${cardNumber}.png`; // card1.png から card3.png 
    }

    // ラウンド進行
    function playRound(playerNumber) {
        const resultDiv = document.getElementById("gameResult");

    // ゲームが終了した場合、カードを引かない
    if (matchCount === 3) {
        resultDiv.innerHTML = `<h1>3回揃った！ 相性バッチリ♡</h1>`;
    document.getElementById("drawButton1").disabled = true; // ボタンを無効にする
    document.getElementById("drawButton2").disabled = true; // ボタンを無効にする
    return; // ゲーム終了
        }

    // プレーヤーがカードを引く
    const card = drawCard();
    players[playerNumber - 1].lastCard = card; // プレーヤーのカードを記録

    // 両方のプレーヤーがカードを引いた場合の処理
    if (players[0].lastCard !== null && players[1].lastCard !== null) {
        // カードが一致した場合
        resultDiv.innerHTML = `<p>${players[0].name} のカード: <img src="https://github.com/taknaag/kadai01_janken.github.io/tree/main/img/${getCardImage(players[0].lastCard)}" class="card" alt="Card ${players[0].lastCard}">, ${players[1].name} のカード: <img src="https://github.com/taknaag/kadai01_janken.github.io/tree/main/img/${getCardImage(players[1].lastCard)}" class="card" alt="Card ${players[1].lastCard}"></p>`;

    if (players[0].lastCard === players[1].lastCard) {
        matchCount += 1;
    if (matchCount === 3) {
        resultDiv.innerHTML += `<h1>3回揃った！ 相性バッチリ♡</h1>`;
                } else {
        resultDiv.innerHTML += `<h2>揃った！</h2>`;
                }
            } else {
        resultDiv.innerHTML += `<h2>残念</h2>`;
            }

    // 2人のカードをリセット
    players[0].lastCard = null;
    players[1].lastCard = null;
        } else {
    
    // プレーヤーがカードを引いた際の表示
    resultDiv.innerHTML = `<p>${players[playerNumber - 1].name} のカード: <img src="https://github.com/taknaag/kadai01_janken.github.io/tree/main/img/${getCardImage(card)}" class="card" alt="Card ${card}"></p>`;
        }
    }
