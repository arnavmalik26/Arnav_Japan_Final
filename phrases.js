// All fixed (verified) text lives here. Japanese and Hindi must be checked by a fluent speaker before submission.
const PHRASES = {
  languages: { en: 'English', ja: '日本語', hi: 'हिन्दी' },
  speech: { en: 'en-US', ja: 'ja-JP', hi: 'hi-IN' },

  // Wake mode: "greet" words are stripped from the request, "key" words keep the whole sentence.
  wake: {
    en: { greet: ['hey sky', 'sky bridge', 'skybridge', 'excuse me'], key: ['help', 'crew', 'attendant'] },
    ja: { greet: ['すみません', '済みません', 'スカイブリッジ', 'スカイ'], key: ['助けて', '乗務員', 'お願いします'] },
    hi: { greet: ['सुनिए', 'सुनो', 'स्काई'], key: ['मदद', 'क्रू'] }
  },

  labels: {
    water: { en: 'Water', ja: 'お水', hi: 'पानी' },
    meal: { en: 'Meal', ja: 'お食事', hi: 'खाना' },
    blanket: { en: 'Blanket', ja: '毛布', hi: 'कंबल' },
    restroom: { en: 'Restroom', ja: '化粧室', hi: 'शौचालय' },
    unwell: { en: 'Feeling Unwell', ja: '体調不良', hi: 'तबीयत खराब' },
    ask: { en: 'Ask Crew', ja: '乗務員に相談', hi: 'कर्मचारी से पूछें' }
  },

  ui: {
    // status
    sent: { en: 'Request sent. Crew notified.', ja: '送信しました。乗務員にお伝えします。', hi: 'अनुरोध भेज दिया गया है।' },
    waiting: { en: 'Waiting for crew...', ja: '乗務員の対応待ち...', hi: 'कर्मचारी की प्रतीक्षा है...' },
    on_the_way: { en: 'Crew is on the way!', ja: '乗務員が向かっております！', hi: 'कर्मचारी आ रहे हैं!' },
    done: { en: 'Request completed', ja: '対応完了しました', hi: 'अनुरोध पूरा हुआ' },
    unwell_sent: { en: 'Help is coming. Please stay seated.', ja: '乗務員が向かいます。お席でお待ちください。', hi: 'मदद आ रही है। कृपया अपनी सीट पर रहें।' },
    sos_hold: { en: 'HOLD 1 SEC FOR SOS', ja: '1秒長押しでSOS', hi: 'SOS के लिए 1 सेकंड दबाएँ' },
    sos_sent: { en: 'SOS sent. Crew has been alerted.', ja: 'SOSを送信しました。乗務員に通知しました。', hi: 'SOS भेज दिया गया। क्रू को सूचित कर दिया गया है।' },
    sos_ack: { en: 'Crew is coming to you.', ja: '乗務員が向かっております。', hi: 'क्रू आपके पास आ रहा है।' },
    crew_says: { en: 'Crew says:', ja: '乗務員より:', hi: 'क्रू का संदेश:' },
    ai_note: { en: 'Machine translated', ja: '機械翻訳', hi: 'मशीन अनुवाद' },
    speak: { en: '🔊 Read aloud', ja: '🔊 読み上げ', hi: '🔊 सुनें' },

    // setup
    seat: { en: 'Seat', ja: '座席', hi: 'सीट' },
    language: { en: 'Language', ja: '言語', hi: 'भाषा' },
    setup_title: { en: 'Welcome aboard', ja: 'ご搭乗ありがとうございます', hi: 'स्वागत है' },
    setup_hint: { en: 'Choose your seat and language', ja: 'ご座席と言語をお選びください', hi: 'अपनी सीट और भाषा चुनें' },
    row: { en: 'Row', ja: '列', hi: 'पंक्ति' },
    letter: { en: 'Seat letter', ja: '座席の文字', hi: 'सीट अक्षर' },
    start: { en: 'Start', ja: '開始', hi: 'शुरू करें' },

    // voice
    voice_title: { en: 'Voice or typed request', ja: '音声・入力リクエスト', hi: 'आवाज़ या लिखकर अनुरोध' },
    voice_unavailable: { en: 'Voice unavailable, use icons', ja: '音声機能が使えません。アイコンをご利用ください', hi: 'वॉयस उपलब्ध नहीं है, आइकॉन का उपयोग करें' },
    mic_blocked: { en: 'Microphone blocked. Please type your request.', ja: 'マイクが使えません。入力してください。', hi: 'माइक बंद है। कृपया लिखकर भेजें।' },
    hold_to_speak: { en: 'Tap or hold to speak', ja: 'タップまたは長押しで話す', hi: 'टैप करें या दबाकर बोलें' },
    listen_mode: { en: 'Voice wake mode', ja: '音声ウェイクモード', hi: 'वॉयस वेक मोड' },
    wake_hint: {
      en: 'Say "Hey Sky" or "Excuse me", then your request.',
      ja: '「すみません」と言ってから、ご用件をどうぞ。',
      hi: '"सुनिए" बोलकर अपनी बात कहें।'
    },
    live_idle: { en: 'Not listening', ja: '停止中', hi: 'सुन नहीं रहा' },
    live_wake: { en: 'Waiting for wake word...', ja: 'ウェイクワード待機中...', hi: 'वेक शब्द की प्रतीक्षा...' },
    live_hearing: { en: 'Hearing...', ja: '聞き取り中...', hi: 'सुन रहा है...' },
    live_armed: { en: 'Go ahead, I am listening', ja: 'どうぞ、お話しください', hi: 'बोलिए, मैं सुन रहा हूँ' },
    live_ignored: { en: 'Ignored (no wake word)', ja: '無視しました（ウェイクワードなし）', hi: 'अनदेखा किया (वेक शब्द नहीं)' },
    live_busy: { en: 'Please answer the question first', ja: '先に確認にお答えください', hi: 'पहले पुष्टि का जवाब दें' },
    translating: { en: 'Translating...', ja: '翻訳中...', hi: 'अनुवाद हो रहा है...' },
    type_placeholder: { en: 'Or type your request', ja: 'または入力してください', hi: 'या यहाँ लिखें' },
    send: { en: 'Send', ja: '送信', hi: 'भेजें' },
    did_you_mean: { en: 'Did you mean:', ja: 'こちらでよろしいですか？', hi: 'क्या आपका मतलब यह है:' },
    crew_will_read: { en: 'Crew will read (Japanese):', ja: '乗務員に表示される内容:', hi: 'क्रू यह पढ़ेगा (जापानी):' },
    yes_send: { en: 'Yes, send', ja: 'はい、送信', hi: 'हाँ, भेजें' },
    no_retry: { en: 'No, try again', ja: 'いいえ、やり直す', hi: 'नहीं, फिर से' },
    cancelled: { en: 'Cancelled', ja: 'キャンセルしました', hi: 'रद्द किया' },

    // seat connect chat
    chat_title: { en: 'Seat Connect', ja: 'シートコネクト', hi: 'सीट कनेक्ट' },
    chat_sub: { en: 'Message another seat. Messages are machine translated.', ja: '他の座席にメッセージを送れます。機械翻訳されます。', hi: 'दूसरी सीट पर संदेश भेजें। संदेश मशीन से अनुवादित होते हैं।' },
    chat_emergency: { en: 'Not for emergencies. Use SOS.', ja: '緊急時は使用しないでください。SOSをご利用ください。', hi: 'आपात स्थिति के लिए नहीं। SOS का उपयोग करें।' },
    chat_to: { en: 'To seat', ja: '宛先の座席', hi: 'किस सीट को' },
    chat_from: { en: 'From seat', ja: '送信元の座席', hi: 'सीट से' },
    chat_placeholder: { en: 'Write a message', ja: 'メッセージを入力', hi: 'संदेश लिखें' },
    chat_empty: { en: 'No messages yet', ja: 'メッセージはまだありません', hi: 'अभी कोई संदेश नहीं' },
    chat_original: { en: 'Original', ja: '原文', hi: 'मूल संदेश' },
    chat_fail: { en: 'Could not translate. Message not sent.', ja: '翻訳できませんでした。送信されていません。', hi: 'अनुवाद नहीं हो सका। संदेश नहीं भेजा गया।' },
    same_seat: { en: 'Choose a different seat', ja: '別の座席をお選びください', hi: 'कोई दूसरी सीट चुनें' },

    // voice: robustness and fallbacks
    tap_hold: { en: 'Tap or hold to speak', ja: 'タップまたは長押しで話す', hi: 'टैप करें या दबाकर बोलें' },
    voice_fallback: { en: 'Voice is not available here. Type your request below.', ja: 'この端末では音声が使えません。下に入力してください。', hi: 'यहाँ आवाज़ उपलब्ध नहीं है। नीचे लिखकर भेजें।' },
    voice_insecure: { en: 'Voice needs a secure (https) page. Type your request below.', ja: '音声にはhttpsでの接続が必要です。下に入力してください。', hi: 'आवाज़ के लिए सुरक्षित (https) पेज चाहिए। नीचे लिखें।' },
    voice_network: { en: 'Voice service not reachable. Type your request below.', ja: '音声サービスに接続できません。下に入力してください。', hi: 'वॉयस सेवा से कनेक्ट नहीं हो सका। नीचे लिखें।' },
    translate_down: { en: 'Translation is unavailable. The crew will read your words as written.', ja: '翻訳が利用できません。乗務員にはそのままの文が届きます。', hi: 'अनुवाद उपलब्ध नहीं है। क्रू आपके शब्द जैसे हैं वैसे पढ़ेगा।' },
    timed_out: { en: 'Timed out. Nothing was sent.', ja: 'タイムアウトしました。送信されていません。', hi: 'समय समाप्त। कुछ भेजा नहीं गया।' },
    auto_read: { en: 'Read replies aloud', ja: '返信を読み上げ', hi: 'जवाब बोलकर सुनाएँ' },
    tts_missing: { en: 'No voice for this language on this device.', ja: 'この端末にはこの言語の音声がありません。', hi: 'इस डिवाइस पर इस भाषा की आवाज़ नहीं है।' },

    // general
    send_fail: { en: 'Could not send. Please try again.', ja: '送信できませんでした。もう一度お試しください。', hi: 'भेज नहीं सके। कृपया फिर से कोशिश करें।' },
    reconnecting: { en: 'Reconnecting...', ja: '再接続中...', hi: 'फिर से जुड़ रहे हैं...' },
    live: { en: 'Live', ja: '接続中', hi: 'लाइव' },
    close: { en: 'Close', ja: '閉じる', hi: 'बंद करें' }
  },

  replies: {
    on_my_way: { en: 'On my way', ja: '向かっております', hi: 'हम आ रहे हैं' },
    please_wait: { en: 'Please wait a moment', ja: '少々お待ちください', hi: 'कृपया थोड़ी प्रतीक्षा करें' },
    stay_seated: { en: 'Please remain seated', ja: 'お席にお座りください', hi: 'कृपया अपनी सीट पर बैठे रहें' },
    done: { en: 'Done', ja: '完了', hi: 'पूर्ण' }
  },

  safety: {
    seatbelt: { en: 'Please fasten your seatbelt securely.', ja: 'シートベルトをお締めください。', hi: 'कृपया अपनी सीटबेल्ट बांध लें।' },
    meal: { en: 'Meal service is now starting.', ja: 'お食事のサービスを開始いたします。', hi: 'भोजन सेवा शुरू हो रही है।' },
    turbulence: { en: 'Turbulence expected, please remain seated.', ja: '揺れが予想されます。お席にお座りください。', hi: 'विमान में झटके लग सकते हैं, कृपया अपनी सीट पर बैठे रहें।' }
  }
};
