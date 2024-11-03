let audioVoices = []; // 変数名を変更

// 音声を読み込む関数
function loadVoices() {
    audioVoices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voiceSelect');
    voiceSelect.innerHTML = ''; // 既存のオプションをクリア

    audioVoices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}

// 音声の設定を保存する関数
function saveSettings() {
    const selectedVoice = document.getElementById('voiceSelect').value;
    const selectedRate = document.getElementById('rateControl').value;

    localStorage.setItem('selectedVoice', selectedVoice);
    localStorage.setItem('selectedRate', selectedRate);
    alert('設定が保存されました。');
}

// ページが読み込まれたときに音声を取得
document.addEventListener('DOMContentLoaded', () => {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices; // 音声が変更されたときに呼び出す
});