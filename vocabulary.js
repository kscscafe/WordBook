let allVoices = []; // グローバル変数として全ての音声を保持
let colorEnabled = false; // 色分けが有効かどうかのフラグ（デフォルトはオフ）
let currentSpeedIndex = 0; // 現在の速度インデックス
const speeds = [1, 0.8, 0.6]; // 速度の配列

// 音声を読み込む関数
function loadVoices() {
    allVoices = speechSynthesis.getVoices(); // 音声を取得して全体に保存
}

// URLからジャンルを取得
const urlParams = new URLSearchParams(window.location.search);
const genre = urlParams.get('genre');

// ジャンルタイトルを表示
document.getElementById('genreTitle').textContent = genre.toUpperCase() + "の例文";

// 語彙リストを表示
const vocabularyList = document.getElementById('vocabularyList');
const list = vocabularyLists[genre]; // vocabularyData.jsからのデータ

function displayVocabulary() {
    vocabularyList.innerHTML = ''; // リストをクリア
    if (list) {
        list.forEach((item, index) => {
            const itemElement = document.createElement('div');

            // Noを表示
            const noElement = document.createElement('div');
            noElement.textContent = index + 1; // インデックス番号を表示
            noElement.style.width = '30px'; // 幅を設定
            noElement.style.display = 'inline-block'; // インラインブロックで配置
            itemElement.appendChild(noElement);

            // Pinyinを表示
            const pinyinElement = document.createElement('div');
            pinyinElement.textContent = item.pinyin; // Pinyinのテキスト
            pinyinElement.style.color = 'gray'; // グレーの色を設定
            pinyinElement.style.fontSize = '0.8em'; // サイズを小さくする
            itemElement.appendChild(pinyinElement);

            // Sentenceを表示
            const sentenceContainer = document.createElement('div');
            sentenceContainer.style.display = 'flex'; // フレックスボックスで配置
            sentenceContainer.style.alignItems = 'center'; // 縦方向を中央揃え
            sentenceContainer.style.marginLeft = '10px'; // 左にマージンを追加

            // 各文字を背景色付きで表示
            const sentenceElement = document.createElement('div');
            item.sentence.split('').forEach((char, index) => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char; // 文字を設定

                // 背景色の設定
                if (colorEnabled) { // 色分けが有効な場合
                    if (item.colors && item.colors.yellow && item.colors.yellow.includes(index)) {
                        charSpan.style.backgroundColor = 'yellow'; // 背景色を黄色に設定
                    } else if (item.colors && item.colors.blue && item.colors.blue.includes(index)) {
                        charSpan.style.backgroundColor = 'lightblue'; // 背景色を青色に設定
                    } else if (item.colors && item.colors.pink && item.colors.pink.includes(index)) {
                        charSpan.style.backgroundColor = 'lightpink'; // 背景色をピンクに設定
                    }
                }

                sentenceElement.appendChild(charSpan); // 文字を追加
            });

            sentenceContainer.appendChild(sentenceElement);

            // 音声ファイルがある場合は再生アイコンを追加
            if (item.audioFileName) {
                const audioButton = document.createElement('button');
                audioButton.className = "audio-button";
                audioButton.onclick = () => playAudio(`audio/${item.audioFileName}`); // 音声ファイル名に `audio/` を追加
                audioButton.innerHTML = '<i class="fas fa-circle-play" style="font-size: 16px;"></i>'; // Font Awesomeの再生アイコン
                audioButton.style.marginLeft = '10px'; // 音声ボタンを右にずらす
                sentenceContainer.appendChild(audioButton);
            }

            // 音声ファイルがない場合は読み上げアイコンを追加
            const speakButton = document.createElement('button');
            speakButton.className = "speak-button";
            speakButton.onclick = () => {
                const selectedVoice = localStorage.getItem('selectedVoice'); // 保存された音声を取得
                const rate = speeds[currentSpeedIndex]; // 現在の速度を取得
                speakText(item.sentence, selectedVoice, rate);
            };
            speakButton.innerHTML = '<i class="fas fa-play" style="font-size: 16px;"></i>'; // Font Awesomeの音量アイコン
            speakButton.style.marginLeft = '10px'; // 読み上げボタンも右にずらす
            sentenceContainer.appendChild(speakButton);

            itemElement.appendChild(sentenceContainer); // Sentenceを追加

            // テキストフィールドを追加
            const textField = document.createElement('input');
            textField.type = 'text';
            textField.placeholder = 'ここにテキストを入力...'; // プレースホルダー
            textField.style.width = '100%'; // 幅を100%に設定
            textField.style.marginTop = '10px'; // 上部に余白を設定
            textField.style.marginBottom = '20px'; // 下部に余白を設定
            itemElement.appendChild(textField); // テキストフィールドを追加

            vocabularyList.appendChild(itemElement); // 語彙リストに追加
        });
    } else {
        vocabularyList.textContent = '選択されたジャンルは存在しません。';
    }
}

// 色分けのオンオフを切り替える関数
function toggleColoring() {
    colorEnabled = !colorEnabled; // フラグを反転
    const icon = document.getElementById('toggleColors').querySelector('i');
    icon.className = colorEnabled ? 'fas fa-fill-drip' : 'fas fa-fill'; // アイコンを切り替え
    displayVocabulary(); // 語彙リストを再表示
}

// 速度を切り替える関数
function toggleSpeed() {
    currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length; // インデックスを更新
    const speedLabels = ["標準", "x0.8", "x0.6"]; // ラベルの配列
    const button = document.getElementById('toggleSpeed');
    button.textContent = speedLabels[currentSpeedIndex]; // ボタンのテキストを更新
}

// 初期表示を行う
displayVocabulary();

// 音声ファイルを再生する関数
function playAudio(audioFileName) {
    const audio = new Audio(audioFileName); // 音声ファイル名を引数に渡す
    audio.playbackRate = speeds[currentSpeedIndex]; // 再生速度を設定
    audio.play().catch(error => {
        console.error("Audio playback failed:", error); // エラーをコンソールに表示
    });
}

// テキストを読み上げる関数
function speakText(text, voiceName, rate = 1) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // 中国語（簡体字）

    const selectedVoice = allVoices.find(voice => voice.name === voiceName);
    if (selectedVoice) {
        utterance.voice = selectedVoice; // 選択された音声を設定
    } else {
        console.error("Voice not found:", voiceName); // エラーメッセージ
    }

    utterance.rate = speeds[currentSpeedIndex]; // 再生速度を設定

    speechSynthesis.speak(utterance);
}

// 音声が読み込まれたときに呼び出される
speechSynthesis.onvoiceschanged = loadVoices;

// ページ読み込み時に音声を取得
document.addEventListener('DOMContentLoaded', () => {
    loadVoices();
    const button = document.getElementById('toggleSpeed');
    button.textContent = "標準"; // デフォルトの表示を「標準」に設定
});