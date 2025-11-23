// Auto-generated JavaScript for Settings page
// This file injects HTML content into the DOM when loaded

(function() {
    'use strict';
    
    // HTML content as template literal (preserves newlines)
    const HTML_CONTENT = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xiaozhi Settings</title>
    <!-- Load CSS from external -->
    <link rel="stylesheet" href="https://nguenvanky.github.io/App/styles/settings.min.css?v=1.0.0" 
          onerror="loadFallbackCSS('settings')">
    <!-- Fallback CSS (minimal inline for offline mode) -->
    <noscript>
        <style>
            * { box-sizing: border-box; }
            body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                margin: 0; 
                padding: 20px; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                position: relative;
            }
        .contact-info {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            backdrop-filter: blur(10px);
            animation: slideInRight 0.5s ease-out;
        }
        .pwa-install-fixed {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            backdrop-filter: blur(10px);
            animation: slideInRight 0.5s ease-out;
            text-align: center;
        }
        .contact-info a {
            color: #667eea;
            text-decoration: none;
            font-weight: bold;
            display: block;
            margin-bottom: 8px;
            transition: color 0.3s;
        }
        .contact-info a:hover {
            color: #764ba2;
        }
        .contact-info .phone {
            color: #333;
            font-size: 14px;
        }
        .lang-selector {
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.95);
            padding: 10px 15px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            backdrop-filter: blur(10px);
        }
        .lang-selector select {
            padding: 8px 12px;
            border: 2px solid #667eea;
            border-radius: 8px;
            font-size: 14px;
            background: white;
            color: #333;
            cursor: pointer;
            outline: none;
            font-weight: 600;
        }
        .lang-selector select:focus {
            border-color: #764ba2;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        .lang-selector label {
            display: inline-block;
            margin-right: 8px;
            font-weight: 600;
            color: #667eea;
            font-size: 14px;
        }
        @keyframes slideInRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .container { 
            max-width: 700px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 16px; 
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            position: relative;
            animation: fadeInUp 0.6s ease-out;
        }
        @keyframes fadeInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes typing {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        h1 { 
            color: #667eea; 
            margin-top: 0; 
            font-size: 28px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-align: center;
            margin-bottom: 30px;
        }
        .section { 
            margin: 25px 0; 
            padding: 20px; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-radius: 12px; 
            border-left: 4px solid #667eea;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .section:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
        }
        .section h2 { 
            margin-top: 0; 
            color: #667eea; 
            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        label { 
            display: block; 
            margin: 15px 0 8px; 
            color: #555; 
            font-weight: 600;
            font-size: 14px;
        }
        input, textarea { 
            width: 100%; 
            padding: 12px; 
            border: 2px solid #e0e0e0; 
            border-radius: 8px; 
            box-sizing: border-box;
            font-size: 14px;
            transition: border-color 0.3s, box-shadow 0.3s;
        }
        input:focus, textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        button { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; 
            padding: 12px 24px; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer; 
            margin: 8px 5px 8px 0;
            font-weight: 600;
            font-size: 14px;
            transition: transform 0.2s, box-shadow 0.3s;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        button:hover { 
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }
        button:active {
            transform: translateY(0);
        }
        .alarm-item { 
            padding: 15px; 
            margin: 10px 0; 
            background: white; 
            border: 2px solid #e0e0e0; 
            border-radius: 8px;
            transition: border-color 0.3s;
        }
        .alarm-item:hover {
            border-color: #667eea;
        }
        .delete-btn { 
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            float: right;
        }
        .delete-btn:hover { 
            box-shadow: 0 6px 20px rgba(245, 87, 108, 0.4);
        }
        .status { 
            padding: 15px; 
            margin: 15px 0; 
            border-radius: 8px;
            font-weight: 500;
            animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
            from { transform: translateY(-10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .success { 
            background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
            color: #155724; 
        }
        .error { 
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            color: #721c24; 
        }
        .ota-section {
            background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
            border-left-color: #f39c12;
        }
        .ota-section h2 {
            color: #d35400;
        }
        .warning-text {
            color: #d35400;
            font-size: 13px;
            margin-top: 10px;
            padding: 10px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 6px;
        }
        
        /* Responsive Design - Tablet (iPad) */
        @media screen and (max-width: 1024px) {
            body {
                padding: 15px;
            }
            .container {
                max-width: 90%;
                padding: 25px;
            }
            .contact-info {
                top: 15px;
                right: 15px;
                padding: 12px 16px;
                font-size: 14px;
            }
            h1 {
                font-size: 24px;
            }
            .section {
                padding: 18px;
            }
        }
        
        /* Responsive Design - Mobile (Điện thoại) */
        @media screen and (max-width: 768px) {
            body {
                padding: 10px;
                background-attachment: fixed;
            }
            .contact-info {
                position: fixed !important;
                top: 10px !important;
                right: 10px !important;
                left: auto !important;
                width: auto !important;
                max-width: calc(100% - 20px) !important;
                padding: 10px 12px !important;
                text-align: left !important;
                margin-bottom: 0 !important;
                font-size: 12px !important;
                z-index: 1000 !important;
            }
            .pwa-install-fixed {
                position: fixed !important;
                bottom: 10px !important;
                right: 10px !important;
                left: auto !important;
                width: auto !important;
                max-width: calc(100% - 20px) !important;
                padding: 10px 12px !important;
                font-size: 11px !important;
                z-index: 1000 !important;
            }
            .pwa-install-fixed button {
                font-size: 12px !important;
                padding: 10px 16px !important;
            }
            .pwa-install-fixed > div {
                font-size: 10px !important;
                margin-top: 4px !important;
            }
            .contact-info a {
                font-size: 12px !important;
                margin-bottom: 4px !important;
            }
            .contact-info .phone {
                font-size: 11px !important;
            }
            .container {
                max-width: 100%;
                padding: 20px 15px;
                border-radius: 12px;
                margin: 0;
            }
            h1 {
                font-size: 22px;
                margin-bottom: 20px;
                line-height: 1.3;
            }
            .section {
                margin: 20px 0;
                padding: 15px;
                border-radius: 10px;
            }
            .section h2 {
                font-size: 18px;
                flex-wrap: wrap;
            }
            label {
                margin: 12px 0 6px;
                font-size: 13px;
            }
            input, textarea {
                padding: 14px;
                font-size: 16px; /* Prevent zoom on iOS */
                border-radius: 8px;
            }
            button {
                width: 100%;
                padding: 14px 20px;
                margin: 8px 0;
                font-size: 16px;
                min-height: 44px; /* Minimum touch target size */
                -webkit-tap-highlight-color: rgba(102, 126, 234, 0.3);
            }
            .delete-btn {
                float: none;
                width: 100%;
                margin-top: 10px;
            }
            .alarm-item {
                padding: 12px;
                margin: 8px 0;
            }
            .status {
                padding: 12px;
                font-size: 14px;
            }
            .warning-text {
                font-size: 12px;
                padding: 8px;
            }
            /* Stack buttons vertically on mobile */
            #add-radio-form button,
            #add-alarm-form button {
                width: 100%;
                margin: 5px 0;
            }
            /* AI Chat input container for mobile */
            #ai_text_input {
                font-size: 20px !important; /* Larger font for mobile - must override inline */
                padding: 18px !important;
                min-height: 80px !important;
                line-height: 1.7 !important;
                width: 100% !important;
                box-sizing: border-box !important;
                flex: 1 1 auto !important;
            }
            /* Send button for AI chat on mobile */
            #send-button {
                padding: 18px 28px !important;
                min-width: 90px !important;
                min-height: 70px !important;
                font-size: 18px !important;
                white-space: nowrap;
                width: 100% !important;
                margin-top: 10px !important;
            }
            /* Chat input container wrapper for mobile - tách thành 2 dòng */
            .section > div[style*="display: flex; gap: 10px; align-items: flex-end;"] {
                flex-direction: column !important;
                align-items: stretch !important;
                gap: 12px !important;
            }
        }
        
        /* Small mobile devices */
        @media screen and (max-width: 480px) {
            body {
                padding: 8px;
            }
            .container {
                padding: 15px 12px;
            }
            h1 {
                font-size: 20px;
            }
            .section {
                padding: 12px;
            }
            .section h2 {
                font-size: 16px;
            }
            input, textarea {
                padding: 12px;
            }
            /* AI Chat textarea specific for small mobile */
            #ai_text_input {
                font-size: 22px !important; /* Even larger font for small mobile */
                padding: 20px !important;
                min-height: 90px !important;
                line-height: 1.7 !important;
                width: 100% !important;
                box-sizing: border-box !important;
                flex: 1 1 auto !important;
            }
            /* Chat input container for mobile */
            #ai_text_input + button {
                flex-shrink: 0;
            }
            button {
                padding: 14px 18px;
                font-size: 16px;
            }
            /* Send button for AI chat on small mobile */
            #send-button {
                padding: 20px 30px !important;
                min-width: 100px !important;
                min-height: 90px !important;
                font-size: 18px !important;
                white-space: nowrap;
                width: 100% !important;
                margin-top: 12px !important;
            }
            /* Chat input container wrapper for small mobile - tách thành 2 dòng */
            .section > div[style*="display: flex; gap: 10px; align-items: flex-end;"] {
                flex-direction: column !important;
                align-items: stretch !important;
                gap: 15px !important;
            }
        }
        
        /* Landscape orientation on mobile */
        @media screen and (max-width: 768px) and (orientation: landscape) {
            .contact-info {
                position: fixed;
                top: 10px;
                right: 10px;
                width: auto;
                max-width: 200px;
                padding: 10px 12px;
            }
            .container {
                margin-top: 60px;
            }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
            button:hover {
                transform: none;
            }
            .section:hover {
                transform: none;
            }
            button:active {
                transform: scale(0.98);
                opacity: 0.9;
            }
        }
        
        /* PWA Install Banner Animation */
        @keyframes slideUp {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        #pwa-install-banner {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        @media screen and (max-width: 768px) {
            #pwa-install-banner {
                padding: 12px 15px;
            }
            #pwa-install-banner > div > div:first-child {
                font-size: 14px;
            }
            #pwa-install-banner > div > div:first-child > div:last-child {
                font-size: 12px;
            }
            #pwa-install-btn, #pwa-install-banner button {
                padding: 8px 16px;
                font-size: 13px;
            }
            .contact-info { position: fixed; top: 10px; right: 10px; background: rgba(255,255,255,0.95); padding: 10px 12px; border-radius: 12px; font-size: 12px; z-index: 1000; }
            .container { max-width: 700px; margin: 0 auto; background: white; padding: 30px; border-radius: 16px; }
            .section { margin: 20px 0; padding: 20px; background: white; border-radius: 12px; }
            button { padding: 12px 24px; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; }
        </style>
    </noscript>
    <!-- PWA Configuration -->
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#667eea">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Xiaozhi Settings">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="description" content="Xiaozhi Settings - Configure your Xiaozhi device">
</head>
<body>
    <div class="contact-info">
        <a href="http://kytuoi.com" target="_blank">🌐 kytuoi.com</a>
        <div class="phone">📞 0345995569</div>
    </div>
    <div class="lang-selector">
        <label for="language">🌐</label>
        <select id="language" onchange="changeLanguage(this.value)">
            <option value="zh-CN">中文 (简体)</option>
            <option value="zh-TW">中文 (繁體)</option>
            <option value="en-US">English</option>
            <option value="ja-JP">日本語</option>
            <option value="ko-KR">한국어</option>
            <option value="vi-VN">Tiếng Việt</option>
            <option value="th-TH">ไทย</option>
        </select>
    </div>
    <div class="container">
        <h1 data-i18n="settings.title">⚙️ Xiaozhi Settings</h1>
        <div id="status"></div>
        
        <div class="section" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-left: 4px solid #667eea;">
            <h2 style="color: #667eea; margin-bottom: 15px;">💬 AI Chat</h2>
            
            <!-- Chat Container -->
            <div id="chat-container" style="background: white; border-radius: 12px; height: 400px; max-height: 60vh; overflow-y: auto; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: flex; flex-direction: column;">
                <div id="chat-messages" style="flex: 1; overflow-y: auto; padding-bottom: 10px;">
                    <!-- Messages will be added here -->
                    <div style="text-align: center; color: #999; padding: 20px; font-size: 14px;">
                        💬 Bắt đầu cuộc trò chuyện với AI...
                    </div>
                </div>
                
                <!-- Typing Indicator -->
                <div id="typing-indicator" style="display: none; padding: 10px; color: #667eea; font-style: italic; font-size: 14px;">
                    <span style="display: inline-block; animation: typing 1.4s infinite;">
                        AI đang suy nghĩ<span id="typing-dots">...</span>
                    </span>
                </div>
            </div>
            
            <!-- Chat Input -->
            <div style="display: flex; gap: 10px; align-items: flex-end;">
                <textarea id="ai_text_input" placeholder="Nhập tin nhắn... (Enter để gửi, Shift+Enter để xuống dòng)" 
                          rows="2" 
                          style="flex: 1; padding: 12px; border: 2px solid #ddd; border-radius: 20px; font-size: 18px; resize: none; font-family: inherit; outline: none; transition: border-color 0.3s; min-height: 70px; line-height: 1.7; box-sizing: border-box; width: 100%;"
                          onfocus="this.style.borderColor='#667eea';"
                          onblur="this.style.borderColor='#ddd';"></textarea>
                <button onclick="sendTextToAI()" 
                        id="send-button"
                        style="padding: 12px 24px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 20px; font-weight: bold; cursor: pointer; transition: all 0.3s; min-width: 80px;"
                        onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(102, 126, 234, 0.4)';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                    📤 Gửi
                </button>
            </div>
            
            <!-- Clear Chat Button -->
            <div style="margin-top: 10px; text-align: right;">
                <button onclick="clearChat()" 
                        style="padding: 8px 16px; background: #f0f0f0; color: #666; border: 1px solid #ddd; border-radius: 8px; font-size: 12px; cursor: pointer; transition: all 0.3s;"
                        onmouseover="this.style.background='#e0e0e0';"
                        onmouseout="this.style.background='#f0f0f0';">
                    🗑️ Xóa lịch sử
                </button>
            </div>
        </div>
        
        <div class="section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-left: 4px solid #667eea;">
            <h2 style="color: white;">🤖 Otto Robot Control</h2>
            <div style="margin: 15px 0;">
                <a href="/otto" style="display: inline-block; padding: 12px 24px; background: white; color: #667eea; text-decoration: none; border-radius: 8px; font-weight: bold; margin-right: 10px; transition: all 0.3s;" onmouseover="this.style.background='#f0f0f0'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='white'; this.style.transform='translateY(0)';">
                    🤖 Otto Control
                </a>
                <a href="/servo-calibration" style="display: inline-block; padding: 12px 24px; background: #ff9800; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; transition: all 0.3s;" onmouseover="this.style.background='#f57c00'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='#ff9800'; this.style.transform='translateY(0)';">
                    ⚙️ Servo Calibration
                </a>
            </div>
            <div style="font-size: 12px; color: rgba(255,255,255,0.9); margin-top: 10px;">
                Điều khiển robot Otto và điều chỉnh góc servo
            </div>
        </div>
        
        <div class="section">
            <h2>Music Server</h2>
            <div class="portal-music-box" id="portal-music-box">
                <div id="portal-music-status" class="portal-music-status">🔄 Đang kiểm tra đăng ký VIP...</div>
                <div id="portal-music-list" class="portal-music-list"></div>
            </div>
            <label>Server URL:</label>
            <input type="text" id="music_server_url" placeholder="http://www.xiaozhishop.xyz:5005">
            <button onclick="saveSettings()">Save Settings</button>
        </div>
        
        <div class="section">
            <h2>⚡ Tiết Kiệm Pin (Power Save)</h2>
            <label>
                <input type="checkbox" id="sleep_mode" style="width: auto; margin-right: 8px;">
                Bật chế độ tiết kiệm pin tự động
            </label>
            <div style="font-size: 12px; color: #666; margin-top: 8px;">
                Khi bật: Sau 60 giây không sử dụng sẽ vào chế độ sleep (giảm độ sáng), sau 10 giờ sẽ tự động tắt máy. Chế độ này chỉ hoạt động khi đang xả pin (không sạc).
            </div>
            <button onclick="saveSettings()">Save Settings</button>
        </div>
        
        <div class="section">
            <h2>🎤 Độ Nhạy Wake Word (Wake Word Sensitivity)</h2>
            <div style="margin-bottom: 8px;">
                <label for="wake_word_sensitivity" style="display: block; margin-bottom: 8px;">
                    Độ nhạy microphone: <span id="wake_word_sensitivity_value">1.0</span>x (<span id="wake_word_sensitivity_db">0</span>dB)
                </label>
                <input type="range" id="wake_word_sensitivity" min="1.0" max="5.0" step="0.1" value="1.0" 
                       style="width: 100%; height: 8px; border-radius: 5px; background: #ddd; outline: none;"
                       oninput="updateWakeWordSensitivity()">
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: #666; margin-top: 4px;">
                    <span>1.0x (0dB) - Mặc định (như code gốc)</span>
                    <span>3.5x (11dB) - Khuyến nghị nếu kém nhạy</span>
                    <span>5.0x (14dB) - Rất nhạy</span>
                </div>
            </div>
            <div style="font-size: 12px; color: #666; margin-top: 8px;">
                Điều chỉnh độ nhạy của microphone cho wake word detection. Mặc định: 1.0x (như code gốc, không có amplification). Nếu wake word detection kém, có thể tăng lên 3.5x - 4.0x. Giá trị cao hơn = nhạy hơn nhưng có thể bị false positives.
            </div>
            <button onclick="saveSettings()">Save Settings</button>
        </div>
        
        <div class="section">
            <h2>🎙️ Điều Chỉnh Microphone & Giảm Nhiễu</h2>
            <div style="margin-bottom: 16px;">
                <label for="vad_mode" style="display: block; margin-bottom: 8px;">
                    VAD Mode (Voice Activity Detection Mode):
                </label>
                <select id="vad_mode" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px;">
                    <option value="0">Mode 0 - Nhạy nhất (mặc định, dễ false positives)</option>
                    <option value="1">Mode 1 - Nhạy (giảm false positives một phần)</option>
                    <option value="2">Mode 2 - Vừa (cân bằng)</option>
                    <option value="3">Mode 3 - Ít nhạy (giảm nhiều false positives, có thể miss speech)</option>
                </select>
                <div style="font-size: 12px; color: #666; margin-top: 4px;">
                    Điều chỉnh độ nhạy của Voice Activity Detection. Mode thấp hơn = nhạy hơn nhưng có thể nhận nhầm tiếng ồn là giọng nói. Mode cao hơn = ít false positives hơn nhưng có thể bỏ sót một số giọng nói. ⚠️ Cần khởi động lại thiết bị để áp dụng.
                </div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label for="vad_min_noise_ms" style="display: block; margin-bottom: 8px;">
                    VAD Min Noise Duration: <span id="vad_min_noise_ms_value">100</span>ms
                </label>
                <input type="range" id="vad_min_noise_ms" min="100" max="500" step="50" value="100" 
                       style="width: 100%; height: 8px; border-radius: 5px; background: #ddd; outline: none;"
                       oninput="updateVadMinNoiseMs()">
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: #666; margin-top: 4px;">
                    <span>100ms - Mặc định</span>
                    <span>500ms - Chờ lâu hơn</span>
                </div>
                <div style="font-size: 12px; color: #666; margin-top: 4px;">
                    Thời gian tối thiểu để VAD phát hiện silence. Giá trị cao hơn = chờ lâu hơn trước khi phát hiện im lặng, hữu ích khi có nhiều khoảng dừng ngắn trong câu nói. ⚠️ Cần khởi động lại thiết bị để áp dụng.
                </div>
            </div>
            
            <div style="margin-bottom: 16px;">
                <label>
                    <input type="checkbox" id="noise_suppression_enabled" style="width: auto; margin-right: 8px;">
                    Bật Noise Suppression (Giảm Nhiễu)
                </label>
                <div style="font-size: 12px; color: #666; margin-top: 4px;">
                    Bật/tắt tính năng giảm nhiễu (noise suppression) để cải thiện chất lượng giọng nói trong môi trường ồn. Mặc định: Bật. ⚠️ Cần khởi động lại thiết bị để áp dụng.
                </div>
            </div>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; padding: 12px; margin-top: 16px;">
                <strong>⚠️ Lưu ý:</strong> Các settings VAD Mode, VAD Min Noise Duration và Noise Suppression cần khởi động lại thiết bị để áp dụng vì chúng được cấu hình khi khởi tạo audio processor.
            </div>
            
            <button onclick="saveSettings()" style="margin-top: 16px;">Save Settings</button>
        </div>
        
        <div class="section">
            <h2>🎵 Wake Word Khi Phát Nhạc/Radio</h2>
            <label>
                <input type="checkbox" id="wake_word_during_music" style="width: auto; margin-right: 8px;">
                Bật wake word detection khi đang phát nhạc hoặc radio
            </label>
            <div style="font-size: 12px; color: #666; margin-top: 8px;">
                Khi bật: Wake word detection sẽ hoạt động ngay cả khi đang phát nhạc hoặc radio. Khi tắt: Wake word detection sẽ bị tắt khi đang phát nhạc/radio để tránh false positives do tiếng nhạc. Mặc định: Bật (true).
            </div>
            <button onclick="saveSettings()">Save Settings</button>
        </div>
        
        <div class="section">
            <h2>Radio Channels</h2>
            <div class="portal-radio-box" id="portal-radio-box">
                <div id="portal-radio-status" class="portal-radio-status">🔄 Đang kiểm tra đăng ký VIP...</div>
                <div id="portal-radio-list" class="portal-radio-list"></div>
            </div>
            <div id="radio-channels-list"></div>
            <button onclick="showAddRadioChannel()">+ Add Channel</button>
            <div id="add-radio-form" style="display:none; margin-top:15px;">
                <label>Title:</label>
                <input type="text" id="new_radio_title" placeholder="VOV1">
                <label>URL:</label>
                <input type="text" id="new_radio_url" placeholder="http://...">
                <label>Artist (optional):</label>
                <input type="text" id="new_radio_artist" placeholder="VOV">
                <button onclick="addRadioChannel()">Add</button>
                <button onclick="hideAddRadioChannel()">Cancel</button>
            </div>
            <button onclick="saveRadioChannels()" style="margin-top:10px;">Save All Channels</button>
        </div>
        
        <div class="section">
            <h2>📱 QR Code Management</h2>
            <label>QR Display Duration (seconds, 10-120):</label>
            <input type="number" id="qr_duration" placeholder="40" min="10" max="120">
            <small>Thời gian hiển thị QR code trên LCD (mặc định: 40 giây)</small>
            <div id="qr-codes-list" style="margin-top: 15px;"></div>
            <button onclick="showAddQrCode()" style="margin-top: 10px;">+ Add QR Code</button>
            <div id="add-qr-form" style="display:none; margin-top:15px;">
                <label>Name:</label>
                <input type="text" id="new_qr_name" placeholder="My QR Code" maxlength="50">
                <label>QR Data/URL:</label>
                <textarea id="new_qr_data" placeholder="http://example.com or any text" rows="3" maxlength="500"></textarea>
                <button onclick="addQrCode()">Add</button>
                <button onclick="hideAddQrCode()">Cancel</button>
            </div>
            <button onclick="saveQrSettings()" style="margin-top:10px;">Save QR Settings</button>
        </div>
        
        <div class="section">
            <h2>Alarm Music</h2>
            <label>Alarm Music URL:</label>
            <input type="text" id="alarm_music_url" placeholder="URL for alarm music">
            <label>Alarm Timeout (seconds, 30-600):</label>
            <input type="number" id="alarm_timeout" placeholder="120" min="30" max="600">
            <small>Thời gian phát nhạc báo thức liên tục (mặc định: 120 giây = 2 phút)</small>
            <button onclick="saveAlarmMusic()">Save Alarm Music</button>
        </div>
        
        <div class="section">
            <h2>Alarms</h2>
            <div id="alarms-list"></div>
            <button onclick="showAddAlarm()">+ Add Alarm</button>
            <div id="add-alarm-form" style="display:none; margin-top:15px;">
                <label>Time (HH:MM):</label>
                <input type="text" id="new_alarm_time" placeholder="08:00">
                <label>Days (comma-separated, 1=Mon, 7=Sun):</label>
                <input type="text" id="new_alarm_days" placeholder="1,2,3,4,5">
                <label>Message:</label>
                <input type="text" id="new_alarm_message" placeholder="Wake up!">
                <button onclick="addAlarm()">Add</button>
                <button onclick="hideAddAlarm()">Cancel</button>
            </div>
        </div>
        
        <div class="section ota-section">
            <h2>🚀 OTA Nâng Cao (Firmware Upgrade)</h2>
            <div class="portal-ota-box" id="portal-ota-box">
                <div id="portal-ota-status" class="portal-radio-status">🔄 Đang kiểm tra đăng ký VIP...</div>
                <div id="portal-ota-list" class="portal-radio-list"></div>
            </div>
            <label>Firmware URL:</label>
            <input type="text" id="ota_firmware_url" placeholder="https://example.com/firmware/xiaozhi.bin">
            <div class="warning-text">
                ⚠️ Cảnh báo: Nâng cấp firmware sẽ khởi động lại thiết bị. Đảm bảo URL firmware hợp lệ và thiết bị có kết nối mạng ổn định.
            </div>
            <button onclick="upgradeFirmware()" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">Upgrade Firmware</button>
            <div id="ota-status" style="margin-top:10px; padding:10px; background:rgba(255,255,255,0.7); border-radius:6px; display:none;"></div>
        </div>
        
        <div class="section ota-section">
            <h2>📦 Upgrade Assets (Models, Fonts, Sounds)</h2>
            <div class="portal-ota-box" id="portal-assets-box">
                <div id="portal-assets-status" class="portal-radio-status">🔄 Đang kiểm tra đăng ký VIP...</div>
                <div id="portal-assets-list" class="portal-radio-list"></div>
            </div>
            <label>Assets URL:</label>
            <input type="text" id="assets_url" placeholder="https://example.com/assets/generated_assets.bin">
            <div class="warning-text">
                ⚠️ Lưu ý: Upgrade assets sẽ tải và flash file assets mới (models, fonts, sounds). Thiết bị sẽ tự động reload sau khi hoàn tất.
            </div>
            <button onclick="upgradeAssets()" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">Upgrade Assets</button>
            <div id="assets-status" style="margin-top:10px; padding:10px; background:rgba(255,255,255,0.7); border-radius:6px; display:none;"></div>
        </div>
        
        <div class="section">
            <button onclick="location.reload()">Refresh</button>
        </div>
        
        <!-- Device Information Section -->
        <div class="section" style="margin-top: 30px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border: 2px solid #667eea; border-radius: 12px; padding: 20px;">
            <h2 style="color: #667eea; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <span>📱</span>
                <span>Thông Tin Thiết Bị (Device Information)</span>
            </h2>
            <div id="device-info" style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <strong style="color: #333; min-width: 120px;">MAC Address:</strong>
                    <span id="mac-address" style="font-family: 'Courier New', monospace; font-size: 16px; color: #667eea; font-weight: bold; padding: 5px 10px; background: #f0f0f0; border-radius: 4px;">
                        Đang tải...
                    </span>
                    <button onclick="copyMacAddress(event)" style="background: #667eea; color: white; border: none; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; transition: all 0.3s;" 
                            onmouseover="this.style.background='#764ba2';" 
                            onmouseout="this.style.background='#667eea';">
                        📋 Copy
                    </button>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <strong style="color: #333; min-width: 120px;">IP Address:</strong>
                    <span id="ip-address" style="font-family: 'Courier New', monospace; font-size: 14px; color: #333;">
                        Đang tải...
                    </span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <strong style="color: #333; min-width: 120px;">Device ID:</strong>
                    <span id="device-id" style="font-family: 'Courier New', monospace; font-size: 14px; color: #333;">
                        Đang tải...
                    </span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Fixed PWA Install Button (Bottom Right Corner) -->
    <div class="pwa-install-fixed" id="pwa-install-button-fixed" style="position: fixed; bottom: 20px; right: 20px; background: rgba(255, 255, 255, 0.95); padding: 15px 20px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 1000; backdrop-filter: blur(10px); text-align: center;">
        <button onclick="installPWA()" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 20px; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 14px; transition: all 0.3s; box-shadow: 0 2px 8px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap;" 
                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)';" 
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.2)';">
            📱 Cài đặt ứng dụng
        </button>
        <div style="font-size: 11px; color: #666; margin-top: 6px;">
            Install App
        </div>
    </div>
    <script>
        // Hide PWA install button if on GitHub Pages App page or PWA is already installed
        (function() {
            function shouldHidePWAButton() {
                // Check if on GitHub Pages App page
                const currentHost = window.location.hostname;
                if (currentHost === 'nguenvanky.github.io' && window.location.pathname.startsWith('/App/')) {
                    return true;
                }
                // Check if PWA is already installed - standalone mode
                if (window.matchMedia('(display-mode: standalone)').matches) {
                    return true;
                }
                // Check iOS standalone mode
                if (window.navigator.standalone === true) {
                    return true;
                }
                // Check Android app mode
                if (document.referrer && document.referrer.includes('android-app://')) {
                    return true;
                }
                // Additional check: window.navigator.standalone on iOS
                if (typeof navigator !== 'undefined' && navigator.standalone === true) {
                    return true;
                }
                return false;
            }
            
            function hidePWAButton() {
                const pwaInstallButton = document.getElementById('pwa-install-button-fixed') || document.querySelector('.pwa-install-fixed');
                if (pwaInstallButton && shouldHidePWAButton()) {
                    console.log('Hiding PWA install button - on App page or PWA installed');
                    pwaInstallButton.style.display = 'none';
                    pwaInstallButton.style.visibility = 'hidden';
                    return true;
                }
                return false;
            }
            
            // Try to hide immediately
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    hidePWAButton();
                    // Check again after a short delay
                    setTimeout(hidePWAButton, 100);
                    setTimeout(hidePWAButton, 500);
                    setTimeout(hidePWAButton, 1000);
                });
            } else {
                // DOM already loaded
                hidePWAButton();
                setTimeout(hidePWAButton, 100);
                setTimeout(hidePWAButton, 500);
                setTimeout(hidePWAButton, 1000);
            }
            
            // Listen for visibility change (when app goes to foreground/background)
            document.addEventListener('visibilitychange', function() {
                if (!document.hidden) {
                    hidePWAButton();
                }
            });
            
            // Listen for appinstalled event
            window.addEventListener('appinstalled', function() {
                console.log('PWA installed - hiding button');
                hidePWAButton();
            });
            
            // Check periodically (every 2 seconds for first 10 seconds)
            let checkCount = 0;
            const checkInterval = setInterval(function() {
                if (hidePWAButton() || checkCount >= 5) {
                    clearInterval(checkInterval);
                }
                checkCount++;
            }, 2000);
        })();
    </script>
    
    <!-- PWA Install Banner -->
    <div id="pwa-install-banner" style="display: none; position: fixed; bottom: 0; left: 0; right: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 20px; box-shadow: 0 -4px 20px rgba(0,0,0,0.3); z-index: 10000; animation: slideUp 0.3s ease-out;">
        <div style="max-width: 700px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <div style="flex: 1; min-width: 200px;">
                <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">📱 Cài đặt ứng dụng</div>
                <div style="font-size: 13px; opacity: 0.9;">Cài đặt để truy cập nhanh hơn và sử dụng offline</div>
            </div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button id="pwa-install-btn" onclick="installPWA()" style="background: white; color: #667eea; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px; transition: all 0.3s; box-shadow: 0 2px 8px rgba(0,0,0,0.2);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.2)';">
                    Cài đặt ngay
                </button>
                <button onclick="dismissPWA()" style="background: transparent; color: white; border: 2px solid white; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 14px; transition: all 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.2)';" onmouseout="this.style.background='transparent';">
                    Đóng
                </button>
            </div>
        </div>
    </div>
    
    <!-- Load JS from external -->
    <script>
        // Fallback loader functions
        function loadFallbackCSS(name) {
            console.warn('External CSS failed, trying fallback:', name);
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/static/css/' + name + '.min.css';
            link.onerror = function() {
                console.error('All CSS loading methods failed for:', name);
            };
            document.head.appendChild(link);
        }
        
        function loadFallbackJS(name) {
            console.warn('External JS failed, trying fallback:', name);
            const script = document.createElement('script');
            script.src = '/static/js/' + name + '.min.js';
            script.onerror = function() {
                console.error('All JS loading methods failed for:', name);
            };
            document.body.appendChild(script);
        }
        
        // Minimal functions needed before external JS loads
        function showStatus(message, isError) {
            const status = document.getElementById('status');
            if (status) {
                status.className = 'status ' + (isError ? 'error' : 'success');
                status.textContent = message;
                setTimeout(() => status.textContent = '', 3000);
            }
        }
        
        function showAddAlarm() {
            document.getElementById('add-alarm-form').style.display = 'block';
        }
        
        function hideAddAlarm() {
            document.getElementById('add-alarm-form').style.display = 'none';
        }
        
        // PWA Install functions (minimal fallback)
        function isOnAppPage() {
            const currentHost = window.location.hostname;
            return currentHost === 'nguenvanky.github.io' && window.location.pathname.startsWith('/App/');
        }
        
        function isPWAInstalled() {
            // Check if running as PWA
            if (window.matchMedia('(display-mode: standalone)').matches ||
                window.navigator.standalone === true ||
                document.referrer.includes('android-app://')) {
                return true;
            }
            // Check if on GitHub Pages App URL
            const currentHost = window.location.hostname;
            if (currentHost === 'nguenvanky.github.io' && window.location.pathname.startsWith('/App/')) {
                return true;
            }
            return false;
        }
        
        function hidePWAInstallButton() {
            const pwaInstallButton = document.querySelector('.pwa-install-fixed');
            if (pwaInstallButton) {
                if (isOnAppPage() || isPWAInstalled()) {
                    console.log('Hiding PWA install button - on App page or PWA installed');
                    pwaInstallButton.style.display = 'none';
                } else {
                    pwaInstallButton.style.display = '';
                }
            }
        }
        
        function installPWA() {
            console.log('installPWA called');
            // Hide banner và dismiss
            const pwaBanner = document.getElementById('pwa-install-banner');
            if (pwaBanner) {
                pwaBanner.style.display = 'none';
            }
            localStorage.setItem('pwa-banner-dismissed', 'true');
            // Detect platform
            const isAndroid = /Android/.test(navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
            if (isAndroid) {
                // Android: Redirect to GitHub Pages App để cài đặt
                window.location.href = 'https://nguenvanky.github.io/App/';
            } else if (isIOS) {
                // iOS: Hiển thị hướng dẫn cài đặt trực tiếp từ trang hiện tại (không redirect)
                const instructions = 
                    '📱 Hướng dẫn cài đặt trên iPhone/iPad:\\n\\n' +
                    '1. Nhấn nút Share (mũi tên lên ⬆️) ở thanh địa chỉ Safari\\n' +
                    '2. Cuộn xuống và chọn "Thêm vào Màn hình chính" hoặc "Add to Home Screen"\\n' +
                    '3. Nhấn "Thêm" hoặc "Add" ở góc phải trên\\n' +
                    '4. Ứng dụng sẽ xuất hiện trên màn hình chính của bạn\\n\\n' +
                    '💡 Ứng dụng sẽ lưu trực tiếp trang Settings hoặc Otto Control này, không cần qua GitHub Pages.';
                alert(instructions);
            } else {
                // Desktop hoặc browser khác: Redirect đến GitHub Pages App
                window.location.href = 'https://nguenvanky.github.io/App/';
            }
        }
        
        // Hide button immediately if on GitHub Pages App page
        hidePWAInstallButton();
        
        // Language translations for Web Settings
        const settingsTranslations = {
            'zh-CN': {
                'settings.title': '⚙️ 小智设置'
            },
            'zh-TW': {
                'settings.title': '⚙️ 小智設定'
            },
            'en-US': {
                'settings.title': '⚙️ Xiaozhi Settings'
            },
            'vi-VN': {
                'settings.title': '⚙️ Cài Đặt Xiaozhi'
            }
        };
        
        // Get saved language or detect browser language
        function getCurrentLanguage() {
            const saved = localStorage.getItem('web_settings_language');
            if (saved && settingsTranslations[saved]) return saved;
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('zh')) {
                return browserLang === 'zh-TW' || browserLang === 'zh-Hant' ? 'zh-TW' : 'zh-CN';
            }
            if (settingsTranslations[browserLang]) return browserLang;
            return 'en-US'; // Default
        }
        
        // Change language
        function changeLanguage(lang) {
            localStorage.setItem('web_settings_language', lang);
            updateTranslations(lang);
        }
        
        // Update translations
        function updateTranslations(lang) {
            const t = settingsTranslations[lang] || settingsTranslations['en-US'];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = t[key];
                    } else {
                        el.textContent = t[key];
                    }
                }
            });
            const langSelect = document.getElementById('language');
            if (langSelect) {
                langSelect.value = lang;
            }
        }
        
        // Initialize language on page load
        const currentLang = getCurrentLanguage();
        updateTranslations(currentLang);
        
        // QR Code Management
        let qrCodes = [];
        let portalMusicServers = [];
        let portalConfig = null;
        let portalMusicStatusEl = null;
        let portalMusicListEl = null;
        let deviceMacAddress = null;
        let portalMusicFetchRequested = false;
        let portalRadioChannels = [];
        let portalRadioStatusEl = null;
        let portalRadioListEl = null;
        let portalRadioFetchRequested = false;
        let portalFirmwareList = [];
        let portalOtaStatusEl = null;
        let portalOtaListEl = null;
        let portalOtaFetchRequested = false;
        let portalAssetsList = [];
        let portalAssetsStatusEl = null;
        let portalAssetsListEl = null;
        let portalAssetsFetchRequested = false;
        const MAX_QR_CODES = 10;
        
        async function loadQrSettings() {
            try {
                const res = await fetch('/api/qr/settings');
                
                // Check if response is OK
                if (!res.ok) {
                    console.error('Failed to load QR settings, status:', res.status);
                    // Use default values if failed
                    document.getElementById('qr_duration').value = 40;
                    qrCodes = [];
                    renderQrCodesList();
                    return;
                }
                
                // Parse JSON response
                let data;
                try {
                    const text = await res.text();
                    data = JSON.parse(text);
                } catch (parseError) {
                    console.error('Failed to parse JSON response:', parseError);
                    // Use default values if parsing failed
                    document.getElementById('qr_duration').value = 40;
                    qrCodes = [];
                    renderQrCodesList();
                    return;
                }
                
                if (data.success) {
                    document.getElementById('qr_duration').value = data.duration || 40;
                    qrCodes = data.qr_codes || [];
                    renderQrCodesList();
                }
            } catch (e) {
                console.error('Error loading QR settings:', e);
                // Use default values on error
                document.getElementById('qr_duration').value = 40;
                qrCodes = [];
                renderQrCodesList();
            }
        }
        
        function renderQrCodesList() {
            const listDiv = document.getElementById('qr-codes-list');
            listDiv.innerHTML = '';
            
            if (qrCodes.length === 0) {
                listDiv.innerHTML = '<p style="color: #666; font-style: italic;">No QR codes yet. Add your first QR code!</p>';
                return;
            }
            
            qrCodes.forEach((qr, index) => {
                const qrDiv = document.createElement('div');
                qrDiv.style.cssText = 'border: 1px solid #ddd; padding: 10px; margin: 5px 0; border-radius: 4px; background: #f9f9f9;';
                qrDiv.innerHTML = \`
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <strong>\${escapeHtml(qr.name)}</strong>
                            <div style="font-size: 12px; color: #666; margin-top: 5px; word-break: break-all;">
                                \${escapeHtml(qr.data.substring(0, 80))}\${qr.data.length > 80 ? '...' : ''}
                            </div>
                        </div>
                        <div>
                            <button onclick="displayQrCode(\${index})" style="padding: 5px 10px; margin: 0 2px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">📺 Show</button>
                            <button onclick="editQrCode(\${index})" style="padding: 5px 10px; margin: 0 2px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">✏️ Edit</button>
                            <button onclick="deleteQrCode(\${index})" style="padding: 5px 10px; margin: 0 2px; background: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;">🗑️ Delete</button>
                        </div>
                    </div>
                \`;
                listDiv.appendChild(qrDiv);
            });
        }
        
        function showAddQrCode() {
            document.getElementById('add-qr-form').style.display = 'block';
            document.getElementById('new_qr_name').value = '';
            document.getElementById('new_qr_data').value = '';
        }
        
        function hideAddQrCode() {
            document.getElementById('add-qr-form').style.display = 'none';
        }
        
        function addQrCode() {
            const name = document.getElementById('new_qr_name').value.trim();
            const data = document.getElementById('new_qr_data').value.trim();
            
            if (!name || !data) {
                alert('Please enter both name and QR data');
                return;
            }
            
            if (qrCodes.length >= MAX_QR_CODES) {
                alert(\`Maximum \${MAX_QR_CODES} QR codes allowed\`);
                return;
            }
            
            qrCodes.push({ id: Date.now().toString(), name: name, data: data });
            renderQrCodesList();
            hideAddQrCode();
        }
        
        function editQrCode(index) {
            const qr = qrCodes[index];
            document.getElementById('new_qr_name').value = qr.name;
            document.getElementById('new_qr_data').value = qr.data;
            document.getElementById('add-qr-form').style.display = 'block';
            
            // Replace add with update
            const addBtn = document.querySelector('#add-qr-form button[onclick="addQrCode()"]');
            addBtn.textContent = 'Update';
            addBtn.onclick = function() {
                updateQrCode(index);
            };
        }
        
        function updateQrCode(index) {
            const name = document.getElementById('new_qr_name').value.trim();
            const data = document.getElementById('new_qr_data').value.trim();
            
            if (!name || !data) {
                alert('Please enter both name and QR data');
                return;
            }
            
            qrCodes[index].name = name;
            qrCodes[index].data = data;
            renderQrCodesList();
            hideAddQrCode();
            
            // Restore add button
            const addBtn = document.querySelector('#add-qr-form button[onclick*="QrCode"]');
            addBtn.textContent = 'Add';
            addBtn.onclick = addQrCode;
        }
        
        function deleteQrCode(index) {
            if (confirm('Delete this QR code?')) {
                qrCodes.splice(index, 1);
                renderQrCodesList();
            }
        }
        
        async function displayQrCode(index) {
            const qr = qrCodes[index];
            try {
                const res = await fetch('/api/qr/display', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ qr_data: qr.data })
                });
                
                // Check if response is OK
                if (!res.ok) {
                    const text = await res.text();
                    alert('Failed to display QR code, status: ' + res.status + ' - ' + text);
                    return;
                }
                
                // Parse JSON response
                let data;
                try {
                    const text = await res.text();
                    data = JSON.parse(text);
                } catch (parseError) {
                    console.error('Failed to parse JSON response:', parseError);
                    alert('Failed to parse server response');
                    return;
                }
                
                if (data.success) {
                    alert('QR code displayed on LCD!');
                } else {
                    alert('Failed: ' + (data.error || 'Unknown error'));
                }
            } catch (e) {
                console.error('Error displaying QR code:', e);
                alert('Error: ' + e.message);
            }
        }
        
        async function saveQrSettings() {
            const duration = parseInt(document.getElementById('qr_duration').value);
            if (duration < 10 || duration > 120) {
                alert('Duration must be between 10 and 120 seconds');
                return;
            }
            
            try {
                const res = await fetch('/api/qr/settings', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        duration: duration,
                        qr_codes: qrCodes
                    })
                });
                
                // Check if response is OK
                if (!res.ok) {
                    const text = await res.text();
                    showStatus('Failed to save QR settings, status: ' + res.status + ' - ' + text, true);
                    return;
                }
                
                // Parse JSON response
                let data;
                try {
                    const text = await res.text();
                    data = JSON.parse(text);
                } catch (parseError) {
                    console.error('Failed to parse JSON response:', parseError);
                    showStatus('Failed to parse server response', true);
                    return;
                }
                
                if (data.success) {
                    showStatus('QR settings saved!', false);
                } else {
                    showStatus('Failed: ' + (data.error || 'Unknown error'), true);
                }
            } catch (e) {
                console.error('Error saving QR settings:', e);
                showStatus('Error: ' + e.message, true);
            }
        }

        function ensurePortalElements() {
            if (!portalMusicStatusEl) {
                portalMusicStatusEl = document.getElementById('portal-music-status');
            }
            if (!portalMusicListEl) {
                portalMusicListEl = document.getElementById('portal-music-list');
            }
            return portalMusicStatusEl !== null && portalMusicListEl !== null;
        }

        function setPortalMusicStatus(message, isError = false) {
            if (!ensurePortalElements()) return;
            portalMusicStatusEl.textContent = message;
            if (isError) {
                portalMusicStatusEl.classList.add('error');
            } else {
                portalMusicStatusEl.classList.remove('error');
            }
        }

        function renderPortalMusicServers(servers) {
            if (!ensurePortalElements()) return;
            portalMusicListEl.innerHTML = '';
            servers.forEach(server => {
                const endpoint = server.endpoint || server.url || server.api || '';
                if (!endpoint) {
                    return;
                }
                const item = document.createElement('div');
                item.className = 'portal-music-item';

                const meta = document.createElement('div');
                meta.className = 'portal-music-meta';

                const name = document.createElement('strong');
                name.textContent = server.name || server.title || 'Máy chủ không tên';
                meta.appendChild(name);

                const detail = document.createElement('span');
                const region = server.region ? \`• \${server.region}\` : '';
                const priority = typeof server.priority === 'number' ? \`• Ưu tiên \${server.priority}\` : '';
                detail.textContent = \`\${server.status === 'online' ? '🟢 Online' : 'ℹ️' } \${region} \${priority}\`.trim();
                meta.appendChild(detail);

                const urlLine = document.createElement('span');
                urlLine.style.fontSize = '12px';
                urlLine.style.color = '#4a5568';
                urlLine.textContent = endpoint;
                meta.appendChild(urlLine);

                const btn = document.createElement('button');
                btn.className = 'portal-music-select';
                btn.textContent = 'Chọn máy chủ';
                btn.onclick = function() {
                    selectPortalMusicServer(endpoint, server.name || server.title || '');
                };

                item.appendChild(meta);
                item.appendChild(btn);

                portalMusicListEl.appendChild(item);
            });
        }

        function selectPortalMusicServer(endpoint, label) {
            const input = document.getElementById('music_server_url');
            if (input) {
                input.value = endpoint;
                input.focus();
            }
            showStatus(\`Đã chọn máy chủ: \${label || endpoint}\`, false);
        }
        
        let vs=false;
        async function checkVipStatus(){try{const r=await fetch('/api/vip/check');if(!r.ok)return;const d=await r.json();vs=d.vip_status||false;const vc=d.vip_checked||false;updateVipLinks();if(!vc&&portalConfig?.portal_base_url&&deviceMacAddress){setTimeout(()=>checkVipFromPortal(),500);}}catch(e){}}
        async function checkVipFromPortal(){if(!portalConfig?.portal_base_url||!deviceMacAddress){return;}try{const url=portalConfig.portal_base_url+'index.php?api=check_vip&token='+encodeURIComponent(deviceMacAddress);const r=await fetch(url);if(!r.ok){return;}const txt=await r.text();let d;try{d=JSON.parse(txt);}catch(e){return;}const isVip=d.is_vip===true;await updateVipStatus(isVip);}catch(e){}}
        async function updateVipStatus(v){try{const r=await fetch('/api/vip/update',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({vip_status:v})});if(!r.ok)return;const d=await r.json();vs=d.vip_status||false;updateVipLinks();}catch(e){}}
        function updateVipLinks(){const ol=document.querySelector('a[href="/otto"]'),sl=document.querySelector('a[href="/servo-calibration"]');const s=vs?'1':'0.5',p=vs?'auto':'none',c=vs?'pointer':'not-allowed';if(ol){ol.style.opacity=s;ol.style.pointerEvents=p;ol.style.cursor=c;if(!vs)ol.title='VIP Required';}if(sl){sl.style.opacity=s;sl.style.pointerEvents=p;sl.style.cursor=c;if(!vs)sl.title='VIP Required';}}

        async function fetchPortalConfig() {
            if (!ensurePortalElements()) return;
            try {
                const res = await fetch('/portal-config.json');
                if (!res.ok) {
                    throw new Error('HTTP ' + res.status);
                }
                portalConfig = await res.json();
                vs = portalConfig.vip_status || false;
                const vc = portalConfig.vip_checked || false;
                updateVipLinks();
                if (!vc && deviceMacAddress) setTimeout(()=>checkVipFromPortal(),1000);
                setPortalMusicStatus('🔐 Đang xác minh thiết bị với hệ thống quản lý...');
                tryFetchPortalMusicServers(true);
                // Also load radio channels if elements are available
                if (ensureRadioPortalElements()) {
                    setPortalRadioStatus('🔐 Đang xác minh thiết bị với hệ thống quản lý...');
                    tryFetchPortalRadioChannels(true);
                }
                // Also load firmware list if elements are available
                if (ensureOtaPortalElements()) {
                    setPortalOtaStatus('🔐 Đang xác minh thiết bị với hệ thống quản lý...');
                    tryFetchPortalFirmwareList(true);
                }
                // Also load assets list if elements are available
                if (ensureAssetsPortalElements()) {
                    setPortalAssetsStatus('🔐 Đang xác minh thiết bị với hệ thống quản lý...');
                    tryFetchPortalAssetsList(true);
                }
            } catch (error) {
                console.error('Portal config error', error);
                setPortalMusicStatus('Không thể tải cấu hình portal. Vui lòng kiểm tra lại.', true);
                if (ensureRadioPortalElements()) {
                    setPortalRadioStatus('Không thể tải cấu hình portal. Vui lòng kiểm tra lại.', true);
                }
                if (ensureOtaPortalElements()) {
                    setPortalOtaStatus('Không thể tải cấu hình portal. Vui lòng kiểm tra lại.', true);
                }
                if (ensureAssetsPortalElements()) {
                    setPortalAssetsStatus('Không thể tải cấu hình portal. Vui lòng kiểm tra lại.', true);
                }
            }
        }

        async function tryFetchPortalMusicServers(force = false) {
            if (!ensurePortalElements()) return;
            if (!portalConfig || !deviceMacAddress) return;
            if (portalMusicFetchRequested && !force) return;
            portalMusicFetchRequested = true;
            await loadPortalMusicServers();
        }

        function buildPortalMusicEndpoint() {
            if (!portalConfig) return null;
            const base = portalConfig.music_servers_endpoint || (portalConfig.portal_base_url ? portalConfig.portal_base_url + 'index.php?api=music_servers' : null);
            if (!base) return null;
            const separator = base.includes('?') ? '&' : '?';
            return \`\${base}\${separator}token=\${encodeURIComponent(deviceMacAddress)}\`;
        }

        async function loadPortalMusicServers() {
            if (!ensurePortalElements()) return;
            const endpoint = buildPortalMusicEndpoint();
            if (!endpoint) {
                setPortalMusicStatus('Thiếu cấu hình endpoint máy chủ nhạc.', true);
                return;
            }
            setPortalMusicStatus('🔄 Đang tải danh sách máy chủ VIP từ portal...');
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status);
                }
                const data = await response.json();
                if (data.vip_required) {
                    setPortalMusicStatus('Thiết bị chưa được kích hoạt VIP. Vui lòng đăng ký trên portal.', true);
                    portalMusicListEl.innerHTML = '';
                    return;
                }
                const servers = Array.isArray(data.servers) ? data.servers : (Array.isArray(data.list) ? data.list : []);
                if (!servers.length) {
                    setPortalMusicStatus('Không tìm thấy máy chủ VIP nào cho thiết bị này.', true);
                    portalMusicListEl.innerHTML = '';
                    return;
                }
                portalMusicServers = servers;
                renderPortalMusicServers(servers);
                setPortalMusicStatus('Chọn một máy chủ VIP bên dưới để áp dụng nhanh.');
            } catch (error) {
                console.error('Portal music fetch error', error);
                setPortalMusicStatus('Không thể kết nối portal. Kiểm tra mạng hoặc trạng thái VIP.', true);
                portalMusicListEl.innerHTML = '';
            }
        }

        function initPortalMusicSection() {
            if (!ensurePortalElements()) return;
            fetchPortalConfig();
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPortalMusicSection);
        } else {
            initPortalMusicSection();
        }

        // Radio Channels Portal Functions
        function ensureRadioPortalElements() {
            if (!portalRadioStatusEl) {
                portalRadioStatusEl = document.getElementById('portal-radio-status');
            }
            if (!portalRadioListEl) {
                portalRadioListEl = document.getElementById('portal-radio-list');
            }
            return portalRadioStatusEl !== null && portalRadioListEl !== null;
        }

        function setPortalRadioStatus(message, isError = false) {
            if (!ensureRadioPortalElements()) return;
            portalRadioStatusEl.textContent = message;
            if (isError) {
                portalRadioStatusEl.classList.add('error');
            } else {
                portalRadioStatusEl.classList.remove('error');
            }
        }

        function renderPortalRadioChannels(channels) {
            if (!ensureRadioPortalElements()) return;
            portalRadioListEl.innerHTML = '';
            channels.forEach(channel => {
                const url = channel.url || channel.stream_url || '';
                const title = channel.title || channel.name || 'Kênh không tên';
                const artist = channel.artist || '';
                if (!url) {
                    return;
                }
                const item = document.createElement('div');
                item.className = 'portal-radio-item';

                const meta = document.createElement('div');
                meta.className = 'portal-radio-meta';

                const name = document.createElement('strong');
                name.textContent = title;
                meta.appendChild(name);

                const detail = document.createElement('span');
                const genre = channel.genre ? \`• \${channel.genre}\` : '';
                const language = channel.language ? \`• \${channel.language.toUpperCase()}\` : '';
                const status = channel.status === 'online' ? '🟢 Online' : 'ℹ️';
                detail.textContent = \`\${status} \${genre} \${language}\`.trim();
                meta.appendChild(detail);

                const urlLine = document.createElement('span');
                urlLine.style.fontSize = '12px';
                urlLine.style.color = '#4a5568';
                urlLine.textContent = url;
                meta.appendChild(urlLine);

                const btn = document.createElement('button');
                btn.className = 'portal-radio-select';
                btn.textContent = 'Thêm kênh';
                btn.onclick = function() {
                    selectPortalRadioChannel(title, url, artist);
                };

                item.appendChild(meta);
                item.appendChild(btn);

                portalRadioListEl.appendChild(item);
            });
        }

        function selectPortalRadioChannel(title, url, artist) {
            document.getElementById('new_radio_title').value = title;
            document.getElementById('new_radio_url').value = url;
            document.getElementById('new_radio_artist').value = artist || '';
            document.getElementById('add-radio-form').style.display = 'block';
            showStatus(\`Đã chọn kênh: \${title}\`, false);
        }

        function buildPortalRadioEndpoint() {
            if (!portalConfig) return null;
            const base = portalConfig.radio_channels_endpoint || (portalConfig.portal_base_url ? portalConfig.portal_base_url + 'index.php?api=radio_channels' : null);
            if (!base) return null;
            const separator = base.includes('?') ? '&' : '?';
            return \`\${base}\${separator}token=\${encodeURIComponent(deviceMacAddress)}&output=esp32\`;
        }

        async function loadPortalRadioChannels() {
            if (!ensureRadioPortalElements()) return;
            const endpoint = buildPortalRadioEndpoint();
            if (!endpoint) {
                setPortalRadioStatus('Thiếu cấu hình endpoint kênh radio.', true);
                return;
            }
            setPortalRadioStatus('🔄 Đang tải danh sách kênh radio VIP từ portal...');
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status);
                }
                const data = await response.json();
                let channels = [];
                if (Array.isArray(data)) {
                    channels = data;
                } else if (data.vip_required) {
                    setPortalRadioStatus('Thiết bị chưa được kích hoạt VIP. Vui lòng đăng ký trên portal.', true);
                    portalRadioListEl.innerHTML = '';
                    return;
                } else if (Array.isArray(data.channels)) {
                    channels = data.channels;
                } else if (Array.isArray(data.list)) {
                    channels = data.list;
                }
                if (!channels.length) {
                    setPortalRadioStatus('Không tìm thấy kênh radio VIP nào cho thiết bị này.', true);
                    portalRadioListEl.innerHTML = '';
                    return;
                }
                portalRadioChannels = channels;
                renderPortalRadioChannels(channels);
                setPortalRadioStatus('Chọn một kênh radio VIP bên dưới để thêm vào danh sách.');
            } catch (error) {
                console.error('Portal radio fetch error', error);
                setPortalRadioStatus('Không thể kết nối portal. Kiểm tra mạng hoặc trạng thái VIP.', true);
                portalRadioListEl.innerHTML = '';
            }
        }

        async function tryFetchPortalRadioChannels(force = false) {
            if (!ensureRadioPortalElements()) return;
            if (!portalConfig || !deviceMacAddress) return;
            if (portalRadioFetchRequested && !force) return;
            portalRadioFetchRequested = true;
            await loadPortalRadioChannels();
        }

        function initPortalRadioSection() {
            if (!ensureRadioPortalElements()) return;
            if (portalConfig && deviceMacAddress) {
                tryFetchPortalRadioChannels();
            } else {
                fetchPortalConfig().then(() => {
                    if (deviceMacAddress) {
                        tryFetchPortalRadioChannels();
                    }
                });
            }
        }

        // Initialize Radio Portal when device info is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(initPortalRadioSection, 1000);
            });
        } else {
            setTimeout(initPortalRadioSection, 1000);
        }

        // OTA Firmware Portal Functions
        function ensureOtaPortalElements() {
            if (!portalOtaStatusEl) {
                portalOtaStatusEl = document.getElementById('portal-ota-status');
            }
            if (!portalOtaListEl) {
                portalOtaListEl = document.getElementById('portal-ota-list');
            }
            return portalOtaStatusEl !== null && portalOtaListEl !== null;
        }

        function setPortalOtaStatus(message, isError = false) {
            if (!ensureOtaPortalElements()) return;
            portalOtaStatusEl.textContent = message;
            if (isError) {
                portalOtaStatusEl.classList.add('error');
            } else {
                portalOtaStatusEl.classList.remove('error');
            }
        }

        function renderPortalFirmwareList(firmwareList) {
            if (!ensureOtaPortalElements()) return;
            portalOtaListEl.innerHTML = '';
            firmwareList.forEach(firmware => {
                // API trả về: file_url, version, release_date, file_size, release_notes, etc.
                const url = firmware.file_url || firmware.url || firmware.download_url || firmware.link || '';
                const version = firmware.version || firmware.name || 'Firmware không tên';
                const description = firmware.release_notes || firmware.description || firmware.info || firmware.desc || '';
                const size = firmware.file_size || firmware.size || firmware.fileSize || 0;
                const sizeStr = size ? \`(\${formatBytes(size)})\` : '';
                const releaseDate = firmware.release_date || firmware.releaseDate || '';
                const checksum = firmware.checksum_md5 || firmware.checksum_sha256 || firmware.checksum || '';
                if (!url) {
                    return;
                }
                const item = document.createElement('div');
                item.className = 'portal-radio-item';

                const meta = document.createElement('div');
                meta.className = 'portal-radio-meta';

                const name = document.createElement('strong');
                name.textContent = version;
                if (sizeStr) {
                    name.textContent += ' ' + sizeStr;
                }
                meta.appendChild(name);

                if (releaseDate) {
                    const dateSpan = document.createElement('span');
                    dateSpan.style.fontSize = '12px';
                    dateSpan.style.color = '#718096';
                    dateSpan.textContent = \` (\${releaseDate})\`;
                    meta.appendChild(dateSpan);
                }

                if (description) {
                    const detail = document.createElement('p');
                    detail.style.margin = '4px 0';
                    detail.style.fontSize = '13px';
                    detail.textContent = description;
                    meta.appendChild(detail);
                }

                if (checksum) {
                    const checksumSpan = document.createElement('span');
                    checksumSpan.style.fontSize = '11px';
                    checksumSpan.style.color = '#a0aec0';
                    checksumSpan.textContent = \`Checksum: \${checksum.substring(0, 16)}...\`;
                    meta.appendChild(checksumSpan);
                }

                const urlLine = document.createElement('span');
                urlLine.style.fontSize = '12px';
                urlLine.style.color = '#4a5568';
                urlLine.textContent = url;
                meta.appendChild(urlLine);

                const btn = document.createElement('button');
                btn.className = 'portal-radio-select';
                btn.textContent = 'Chọn firmware';
                btn.onclick = function() {
                    selectPortalFirmware(url, version);
                };

                item.appendChild(meta);
                item.appendChild(btn);

                portalOtaListEl.appendChild(item);
            });
        }

        function selectPortalFirmware(url, version) {
            document.getElementById('ota_firmware_url').value = url;
            showStatus(\`Đã chọn firmware: \${version}\`, false);
        }

        function formatBytes(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        }

        function buildPortalFirmwareEndpoint() {
            if (!portalConfig) return null;
            const base = portalConfig.firmware_endpoint || (portalConfig.portal_base_url ? portalConfig.portal_base_url + 'index.php?api=firmware_list' : null);
            if (!base) return null;
            const separator = base.includes('?') ? '&' : '?';
            return \`\${base}\${separator}token=\${encodeURIComponent(deviceMacAddress)}&output=esp32\`;
        }

        async function loadPortalFirmwareList() {
            if (!ensureOtaPortalElements()) return;
            const endpoint = buildPortalFirmwareEndpoint();
            if (!endpoint) {
                setPortalOtaStatus('Thiếu cấu hình endpoint firmware.', true);
                return;
            }
            setPortalOtaStatus('🔄 Đang tải danh sách firmware VIP từ portal...');
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('Portal firmware fetch HTTP error:', response.status, errorText);
                    if (response.status === 403) {
                        setPortalOtaStatus('Thiết bị chưa được kích hoạt VIP hoặc không có quyền truy cập.', true);
                    } else {
                        setPortalOtaStatus('Lỗi khi tải danh sách firmware: HTTP ' + response.status, true);
                    }
                    portalOtaListEl.innerHTML = '';
                    return;
                }
                const textResponse = await response.text();
                let data;
                try {
                    data = JSON.parse(textResponse);
                } catch (jsonError) {
                    console.error('Failed to parse JSON from portal firmware list:', jsonError, 'Response:', textResponse.substring(0, 200));
                    setPortalOtaStatus('Lỗi định dạng dữ liệu từ portal. Kiểm tra lại API.', true);
                    portalOtaListEl.innerHTML = '';
                    return;
                }
                
                let firmwareList = [];
                if (Array.isArray(data)) {
                    firmwareList = data;
                } else if (data.vip_required) {
                    setPortalOtaStatus('Thiết bị chưa được kích hoạt VIP. Vui lòng đăng ký trên portal.', true);
                    portalOtaListEl.innerHTML = '';
                    return;
                } else if (data.error) {
                    setPortalOtaStatus('Lỗi từ portal: ' + data.error, true);
                    portalOtaListEl.innerHTML = '';
                    return;
                } else if (Array.isArray(data.firmware)) {
                    firmwareList = data.firmware;
                } else if (Array.isArray(data.list)) {
                    firmwareList = data.list;
                } else if (data.data && Array.isArray(data.data)) {
                    firmwareList = data.data;
                }
                
                if (!firmwareList.length) {
                    setPortalOtaStatus('Không tìm thấy firmware nào cho thiết bị này. Kiểm tra lại trạng thái VIP hoặc tham số API.', true);
                    portalOtaListEl.innerHTML = '';
                    return;
                }
                portalFirmwareList = firmwareList;
                renderPortalFirmwareList(firmwareList);
                setPortalOtaStatus('Chọn một firmware VIP bên dưới để nâng cấp.');
            } catch (error) {
                console.error('Portal firmware fetch error', error);
                setPortalOtaStatus('Không thể kết nối portal. Kiểm tra mạng hoặc trạng thái VIP. Error: ' + error.message, true);
                portalOtaListEl.innerHTML = '';
            }
        }

        async function tryFetchPortalFirmwareList(force = false) {
            if (!ensureOtaPortalElements()) return;
            if (!portalConfig || !deviceMacAddress) return;
            if (portalOtaFetchRequested && !force) return;
            portalOtaFetchRequested = true;
            await loadPortalFirmwareList();
        }

        function initPortalOtaSection() {
            if (!ensureOtaPortalElements()) return;
            if (portalConfig && deviceMacAddress) {
                tryFetchPortalFirmwareList();
            } else {
                fetchPortalConfig().then(() => {
                    if (deviceMacAddress) {
                        tryFetchPortalFirmwareList();
                    }
                });
            }
        }

        // Initialize OTA Portal when device info is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(initPortalOtaSection, 1500);
            });
        } else {
            setTimeout(initPortalOtaSection, 1500);
        }

        // Assets Portal Functions
        function ensureAssetsPortalElements() {
            if (!portalAssetsStatusEl) {
                portalAssetsStatusEl = document.getElementById('portal-assets-status');
            }
            if (!portalAssetsListEl) {
                portalAssetsListEl = document.getElementById('portal-assets-list');
            }
            return portalAssetsStatusEl !== null && portalAssetsListEl !== null;
        }

        function setPortalAssetsStatus(message, isError = false) {
            if (!ensureAssetsPortalElements()) return;
            portalAssetsStatusEl.textContent = message;
            if (isError) {
                portalAssetsStatusEl.classList.add('error');
            } else {
                portalAssetsStatusEl.classList.remove('error');
            }
        }

        function renderPortalAssetsList(l){if(!ensureAssetsPortalElements()||!l||l.length===0)return;portalAssetsListEl.innerHTML='';for(let i=0;i<l.length;i++){const a=l[i];const u=a.file_url||a.url||a.download_url||a.link||'';if(!u)continue;const n=a.name||a.title||'Assets không tên';const v=a.version||'';const t=a.type||'';const d=a.description||a.info||a.desc||'';const s=a.file_size?\`(\${formatBytes(a.file_size)})\`:'';const p=a.preview_image_url||a.preview||'';const it=document.createElement('div');it.className='portal-radio-item';if(p){const ic=document.createElement('div');ic.style.cssText='width:80px;height:80px;flex-shrink:0;margin-right:12px;border-radius:6px;overflow:hidden;border:1px solid #e2e8f0';const im=document.createElement('img');im.src=p;im.style.cssText='width:100%;height:100%;object-fit:cover';im.onerror=function(){ic.style.display='none';};ic.appendChild(im);it.appendChild(ic);}const m=document.createElement('div');m.className='portal-radio-meta';m.style.flex='1';const ne=document.createElement('strong');ne.textContent=(t?\`[\${t.toUpperCase()}] \`:'')+n+(v?\` v\${v}\`:'');m.appendChild(ne);if(d||s){const dt=document.createElement('span');dt.textContent=(d+' '+s).trim();m.appendChild(dt);}const ul=document.createElement('span');ul.style.fontSize='12px';ul.style.color='#4a5568';ul.textContent=u;m.appendChild(ul);const b=document.createElement('button');b.className='portal-radio-select';b.textContent='Chọn assets';b.onclick=function(){selectPortalAssets(u,n);};it.appendChild(m);it.appendChild(b);portalAssetsListEl.appendChild(it);}}

        function selectPortalAssets(url, version) {
            document.getElementById('assets_url').value = url;
            showStatus(\`Đã chọn assets: \${version}\`, false);
        }

        function buildPortalAssetsEndpoint() {
            if (!portalConfig) return null;
            const base = portalConfig.assets_endpoint || (portalConfig.portal_base_url ? portalConfig.portal_base_url + 'index.php?api=assets' : null);
            if (!base) return null;
            const separator = base.includes('?') ? '&' : '?';
            return \`\${base}\${separator}token=\${encodeURIComponent(deviceMacAddress)}&output=esp32\`;
        }

        async function loadPortalAssetsList() {
            if (!ensureAssetsPortalElements()) return;
            const endpoint = buildPortalAssetsEndpoint();
            if (!endpoint) {
                setPortalAssetsStatus('Thiếu cấu hình endpoint assets.', true);
                return;
            }
            setPortalAssetsStatus('🔄 Đang tải danh sách assets VIP từ portal...');
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status);
                }
                const data = await response.json();
                let assetsList = [];
                
                // API trả về format: { themes: [], fonts: [], sounds: [], images: [] }
                const ts=['themes','fonts','sounds','images'],tm={'themes':'theme','fonts':'font','sounds':'sound','images':'image'};
                for(let i=0;i<ts.length;i++){const t=ts[i];if(data[t]&&Array.isArray(data[t])){for(let j=0;j<data[t].length;j++){const a=data[t][j];a.type=tm[t];assetsList.push(a);}}}
                if(assetsList.length===0){
                    if(Array.isArray(data))assetsList=data;
                    else if(data.vip_required){setPortalAssetsStatus('Thiết bị chưa được kích hoạt VIP. Vui lòng đăng ký trên portal.',true);portalAssetsListEl.innerHTML='';return;}
                    else if(Array.isArray(data.assets))assetsList=data.assets;
                    else if(Array.isArray(data.list))assetsList=data.list;
                    else if(data.data&&Array.isArray(data.data))assetsList=data.data;
                }
                
                if (!assetsList.length) {
                    setPortalAssetsStatus('Không tìm thấy assets VIP nào cho thiết bị này. Kiểm tra lại API hoặc trạng thái VIP.', true);
                    portalAssetsListEl.innerHTML = '';
                    return;
                }
                portalAssetsList = assetsList;
                renderPortalAssetsList(assetsList);
                setPortalAssetsStatus('Chọn một assets VIP bên dưới để nâng cấp.');
            } catch (error) {
                console.error('Portal assets fetch error', error);
                setPortalAssetsStatus('Không thể kết nối portal. Kiểm tra mạng hoặc trạng thái VIP. Error: ' + error.message, true);
                portalAssetsListEl.innerHTML = '';
            }
        }

        async function tryFetchPortalAssetsList(force = false) {
            if (!ensureAssetsPortalElements()) return;
            if (!portalConfig || !deviceMacAddress) return;
            if (portalAssetsFetchRequested && !force) return;
            portalAssetsFetchRequested = true;
            await loadPortalAssetsList();
        }

        function initPortalAssetsSection() {
            if (!ensureAssetsPortalElements()) {
                return;
            }
            if (portalConfig && deviceMacAddress) {
                tryFetchPortalAssetsList();
            } else {
                fetchPortalConfig().then(() => {
                    if (deviceMacAddress) {
                        tryFetchPortalAssetsList();
                    }
                });
            }
        }

        // Initialize Assets Portal when device info is loaded
        function startAssetsPortalInit() {
            console.log('Starting assets portal initialization...');
            // Wait a bit longer to ensure device info is loaded
            setTimeout(() => {
                initPortalAssetsSection();
            }, 2000);
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startAssetsPortalInit);
        } else {
            startAssetsPortalInit();
        }
        
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        async function loadSettings() {
            try {
                const res = await fetch('/api/settings');
                const data = await res.json();
                if (data.music_server_url) document.getElementById('music_server_url').value = data.music_server_url;
                if (data.alarm_music_url) document.getElementById('alarm_music_url').value = data.alarm_music_url;
                if (data.alarm_timeout) document.getElementById('alarm_timeout').value = data.alarm_timeout;
                if (data.sleep_mode !== undefined) document.getElementById('sleep_mode').checked = data.sleep_mode;
                if (data.wake_word_sensitivity !== undefined) {
                    document.getElementById('wake_word_sensitivity').value = data.wake_word_sensitivity;
                    updateWakeWordSensitivity();
                }
                if (data.wake_word_during_music !== undefined) {
                    document.getElementById('wake_word_during_music').checked = data.wake_word_during_music;
                }
                if (data.vad_mode !== undefined) {
                    document.getElementById('vad_mode').value = data.vad_mode;
                }
                if (data.vad_min_noise_ms !== undefined) {
                    document.getElementById('vad_min_noise_ms').value = data.vad_min_noise_ms;
                    updateVadMinNoiseMs();
                }
                if (data.noise_suppression_enabled !== undefined) {
                    document.getElementById('noise_suppression_enabled').checked = data.noise_suppression_enabled;
                }
                if (data.qr_duration !== undefined) {
                    document.getElementById('qr_duration').value = data.qr_duration;
                }
            } catch (e) {
                console.error('Failed to load settings:', e);
            }
        }
        
        async function loadAlarms() {
            try {
                const res = await fetch('/api/alarms');
                const data = await res.json();
                const list = document.getElementById('alarms-list');
                list.innerHTML = '';
                data.alarms.forEach(alarm => {
                    const div = document.createElement('div');
                    div.className = 'alarm-item';
                    div.innerHTML = '<strong>' + alarm.time + '</strong> - ' + alarm.message +
                        '<button class="delete-btn" onclick="deleteAlarm(\\'' + alarm.id + '\\')">Delete</button>';
                    list.appendChild(div);
                });
            } catch (e) {
                console.error('Failed to load alarms:', e);
            }
        }
        
        async function saveSettings() {
            try {
                const res = await fetch('/api/settings', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        music_server_url: document.getElementById('music_server_url').value,
                        sleep_mode: document.getElementById('sleep_mode').checked,
                        wake_word_sensitivity: parseFloat(document.getElementById('wake_word_sensitivity').value),
                        wake_word_during_music: document.getElementById('wake_word_during_music').checked,
                        vad_mode: parseInt(document.getElementById('vad_mode').value),
                        vad_min_noise_ms: parseInt(document.getElementById('vad_min_noise_ms').value),
                        noise_suppression_enabled: document.getElementById('noise_suppression_enabled').checked
                    })
                });
                const data = await res.json();
                if (data.success) {
                    showStatus('Settings saved!', false);
                } else {
                    showStatus('Failed to save: ' + data.message, true);
                }
            } catch (e) {
                showStatus('Error: ' + e.message, true);
            }
        }
        
        async function saveAlarmMusic() {
            try {
                const url = document.getElementById('alarm_music_url').value;
                const timeout = parseInt(document.getElementById('alarm_timeout').value) || 120;
                const res = await fetch('/api/settings', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        alarm_music_url: url,
                        alarm_timeout: timeout
                    })
                });
                const data = await res.json();
                if (data.success) {
                    showStatus('Alarm music settings saved!', false);
                } else {
                    showStatus('Failed to save: ' + data.message, true);
                }
            } catch (e) {
                showStatus('Error: ' + e.message, true);
            }
        }
        
        async function addAlarm() {
            try {
                const time = document.getElementById('new_alarm_time').value;
                const daysStr = document.getElementById('new_alarm_days').value;
                const message = document.getElementById('new_alarm_message').value;
                const days = daysStr.split(',').map(d => parseInt(d.trim())).filter(d => !isNaN(d));
                
                const res = await fetch('/api/alarms', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ time, days, message })
                });
                const data = await res.json();
                if (data.success) {
                    showStatus('Alarm added!', false);
                    hideAddAlarm();
                    loadAlarms();
                } else {
                    showStatus('Failed: ' + data.message, true);
                }
            } catch (e) {
                showStatus('Error: ' + e.message, true);
            }
        }
        
        async function deleteAlarm(id) {
            try {
                const res = await fetch('/api/alarms/' + id, { method: 'DELETE' });
                const data = await res.json();
                if (data.success) {
                    showStatus('Alarm deleted!', false);
                    loadAlarms();
                } else {
                    showStatus('Failed: ' + data.message, true);
                }
            } catch (e) {
                showStatus('Error: ' + e.message, true);
            }
        }
        
        function showAddRadioChannel() {
            document.getElementById('add-radio-form').style.display = 'block';
        }
        
        function hideAddRadioChannel() {
            document.getElementById('add-radio-form').style.display = 'none';
            document.getElementById('new_radio_title').value = '';
            document.getElementById('new_radio_url').value = '';
            document.getElementById('new_radio_artist').value = '';
        }
        
        async function loadRadioChannels() {
            try {
                const res = await fetch('/api/radio/channels');
                const data = await res.json();
                const list = document.getElementById('radio-channels-list');
                list.innerHTML = '';
                data.forEach((channel, idx) => {
                    const div = document.createElement('div');
                    div.className = 'alarm-item';
                    div.innerHTML = '<strong>' + (idx + 1) + '. ' + channel.title + '</strong><br>' +
                        'URL: ' + channel.url + (channel.artist ? '<br>Artist: ' + channel.artist : '') +
                        '<button class="delete-btn" onclick="deleteRadioChannel(' + idx + ')">Delete</button>';
                    list.appendChild(div);
                });
            } catch (e) {
                console.error('Failed to load radio channels:', e);
            }
        }
        
        async function addRadioChannel() {
            const title = document.getElementById('new_radio_title').value.trim();
            const url = document.getElementById('new_radio_url').value.trim();
            const artist = document.getElementById('new_radio_artist').value.trim();
            
            if (!title || !url) {
                showStatus('Title and URL are required', true);
                return;
            }
            
            try {
                const res = await fetch('/api/radio/channels');
                const channels = await res.json();
                channels.push({
                    title: title,
                    url: url,
                    artist: artist || '',
                    duration: 'N/A'
                });
                
                const saveRes = await fetch('/api/radio/channels', {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(channels)
                });
                const data = await saveRes.json();
                if (data.success) {
                    showStatus('Radio channel added!', false);
                    hideAddRadioChannel();
                    loadRadioChannels();
                } else {
                    showStatus('Failed: ' + data.message, true);
                }
            } catch (e) {
                showStatus('Error: ' + e.message, true);
            }
        }
        
        async function deleteRadioChannel(idx) {
            try {
                const res = await fetch('/api/radio/channels');
                const channels = await res.json();
                channels.splice(idx, 1);
                
                const saveRes = await fetch('/api/radio/channels', {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(channels)
                });
                const data = await saveRes.json();
                if (data.success) {
                    showStatus('Radio channel deleted!', false);
                    loadRadioChannels();
                } else {
                    showStatus('Failed: ' + data.message, true);
                }
            } catch (e) {
                showStatus('Error: ' + e.message, true);
            }
        }
        
        async function saveRadioChannels() {
            try {
                const res = await fetch('/api/radio/channels');
                const channels = await res.json();
                
                const saveRes = await fetch('/api/radio/channels', {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(channels)
                });
                const data = await saveRes.json();
                if (data.success) {
                    showStatus('Radio channels saved!', false);
                    loadRadioChannels();
                } else {
                    showStatus('Failed: ' + data.message, true);
                }
            } catch (e) {
                showStatus('Error: ' + e.message, true);
            }
        }
        
        // Chat messages array
        let chatMessages = [];
        
        function renderChatMessage(entry) {
            const text = entry.text || '';
            const sender = entry.sender || 'user';
            const timeStr = entry.timestamp || new Date().toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'});
            const messagesContainer = document.getElementById('chat-messages');
            const emptyMessage = messagesContainer.querySelector('div[style*="text-align: center"]');
            if (emptyMessage) {
                emptyMessage.remove();
            }
            
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message';
            messageDiv.style.cssText = \`
                display: flex;
                margin-bottom: 15px;
                animation: slideIn 0.3s ease-out;
                \${sender === 'user' ? 'justify-content: flex-end;' : 'justify-content: flex-start;'}
            \`;
            
            const messageBubble = document.createElement('div');
            messageBubble.style.cssText = \`
                max-width: 70%;
                padding: 12px 16px;
                border-radius: 18px;
                word-wrap: break-word;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                \${sender === 'user' 
                    ? 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-bottom-right-radius: 4px;' 
                    : 'background: #f0f0f0; color: #333; border-bottom-left-radius: 4px;'}
            \`;
            
            const messageText = document.createElement('div');
            messageText.style.cssText = 'font-size: 14px; line-height: 1.5; white-space: pre-wrap;';
            messageText.textContent = text;
            messageBubble.appendChild(messageText);
            
            const timeSpan = document.createElement('div');
            timeSpan.style.cssText = \`
                font-size: 11px;
                margin-top: 4px;
                opacity: 0.7;
                \${sender === 'user' ? 'color: rgba(255,255,255,0.8);' : 'color: #666;'}
            \`;
            timeSpan.textContent = timeStr;
            messageBubble.appendChild(timeSpan);
            
            messageDiv.appendChild(messageBubble);
            messagesContainer.appendChild(messageDiv);
            
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        function addChatMessage(text, sender, timestamp = null) {
            const timeStr = timestamp instanceof Date ? timestamp.toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'}) : (timestamp || new Date().toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'}));
            const entry = {text, sender, timestamp: timeStr};
            chatMessages.push(entry);
            saveChatHistory();
            renderChatMessage(entry);
        }
        
        // Show typing indicator
        function showTypingIndicator() {
            const indicator = document.getElementById('typing-indicator');
            indicator.style.display = 'block';
            
            let dots = 0;
            const dotsInterval = setInterval(() => {
                dots = (dots + 1) % 4;
                document.getElementById('typing-dots').textContent = '.'.repeat(dots);
            }, 500);
            
            indicator.dataset.interval = dotsInterval;
        }
        
        // Hide typing indicator
        function hideTypingIndicator() {
            const indicator = document.getElementById('typing-indicator');
            indicator.style.display = 'none';
            if (indicator.dataset.interval) {
                clearInterval(parseInt(indicator.dataset.interval));
            }
        }
        
        // Save chat history to localStorage
        function saveChatHistory() {
            try {
                localStorage.setItem('xiaozhi_chat_history', JSON.stringify(chatMessages));
            } catch (e) {
                console.warn('Failed to save chat history:', e);
            }
        }
        
        // Load chat history from localStorage
        function loadChatHistory() {
            try {
                const saved = localStorage.getItem('xiaozhi_chat_history');
                if (saved) {
                    chatMessages = JSON.parse(saved);
                    const messagesContainer = document.getElementById('chat-messages');
                    messagesContainer.innerHTML = '';
                    chatMessages.forEach(msg => renderChatMessage(msg));
                }
            } catch (e) {
                console.warn('Failed to load chat history:', e);
            }
        }
        
        // Clear chat
        function clearChat() {
            if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử chat?')) {
                chatMessages = [];
                const messagesContainer = document.getElementById('chat-messages');
                messagesContainer.innerHTML = '<div style="text-align: center; color: #999; padding: 20px; font-size: 14px;">💬 Bắt đầu cuộc trò chuyện với AI...</div>';
                saveChatHistory();
            }
        }
        
        async function sendTextToAI() {
            const textInput = document.getElementById('ai_text_input');
            const text = textInput.value.trim();
            if (!text) {
                showStatus('Vui lòng nhập tin nhắn', true);
                return;
            }
            
            // Disable input and button
            textInput.disabled = true;
            const sendButton = document.getElementById('send-button');
            sendButton.disabled = true;
            sendButton.textContent = '⏳ Đang gửi...';
            
            // Add user message to chat
            addChatMessage(text, 'user');
            
            // Clear input
            textInput.value = '';
            textInput.style.height = 'auto';
            
            // Show typing indicator
            showTypingIndicator();
            
            try {
                const res = await fetch('/api/ai/send', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ text: text })
                });
                const data = await res.json();
                
                // Hide typing indicator
                hideTypingIndicator();
                
                if (data.success) {
                    // Add AI response placeholder (actual response will come from device)
                    addChatMessage('✅ Tin nhắn đã được gửi đến AI. Phản hồi sẽ hiển thị trên thiết bị.', 'ai');
                    showStatus('Tin nhắn đã gửi thành công!', false);
                } else {
                    addChatMessage('❌ Lỗi: ' + (data.message || 'Không thể gửi tin nhắn'), 'ai');
                    showStatus('Lỗi: ' + (data.message || 'Không thể gửi tin nhắn'), true);
                }
            } catch (e) {
                hideTypingIndicator();
                addChatMessage('❌ Lỗi kết nối: ' + e.message, 'ai');
                showStatus('Lỗi: ' + e.message, true);
            } finally {
                // Re-enable input and button
                textInput.disabled = false;
                sendButton.disabled = false;
                sendButton.textContent = '📤 Gửi';
                textInput.focus();
            }
        }
        
        
        // Load on page load
        loadSettings();
        loadAlarms();
        loadRadioChannels();
        loadQrSettings();
        checkVipStatus();
        
        // Add Enter key support for Send Text to AI textarea
        const textInput = document.getElementById('ai_text_input');
        textInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Prevent newline
                sendTextToAI();
            }
        });
        
        // Auto-resize textarea
        textInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
        
        // Load chat history on page load
        loadChatHistory();
        
        async function upgradeFirmware() {
            const url = document.getElementById('ota_firmware_url').value.trim();
            if (!url) {
                showStatus('Please enter firmware URL', true);
                return;
            }
            
            if (!confirm('⚠️ Cảnh báo: Nâng cấp firmware sẽ khởi động lại thiết bị. Bạn có chắc chắn muốn tiếp tục?')) {
                return;
            }
            
            const statusDiv = document.getElementById('ota-status');
            statusDiv.style.display = 'block';
            statusDiv.textContent = 'Đang bắt đầu nâng cấp firmware...';
            statusDiv.style.background = '#fff3cd';
            statusDiv.style.color = '#856404';
            
            try {
                const res = await fetch('/api/ota/upgrade', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ url: url })
                });
                const data = await res.json();
                if (data.success) {
                    statusDiv.textContent = '✅ Nâng cấp firmware đã bắt đầu! Thiết bị sẽ khởi động lại sau khi hoàn tất.';
                    statusDiv.style.background = '#d4edda';
                    statusDiv.style.color = '#155724';
                    showStatus('Firmware upgrade started!', false);
                } else {
                    statusDiv.textContent = '❌ Lỗi: ' + (data.message || 'Unknown error');
                    statusDiv.style.background = '#f8d7da';
                    statusDiv.style.color = '#721c24';
                    showStatus('Failed: ' + (data.message || 'Unknown error'), true);
                }
            } catch (e) {
                statusDiv.textContent = '❌ Lỗi kết nối: ' + e.message;
                statusDiv.style.background = '#f8d7da';
                statusDiv.style.color = '#721c24';
                showStatus('Error: ' + e.message, true);
            }
        }
        
        async function upgradeAssets() {
            const url = document.getElementById('assets_url').value.trim();
            if (!url) {
                showStatus('Please enter assets URL', true);
                return;
            }
            
            if (!confirm('⚠️ Lưu ý: Upgrade assets sẽ tải và flash file assets mới. Bạn có chắc chắn muốn tiếp tục?')) {
                return;
            }
            
            const statusDiv = document.getElementById('assets-status');
            statusDiv.style.display = 'block';
            statusDiv.textContent = 'Đang bắt đầu tải assets...';
            statusDiv.style.background = '#fff3cd';
            statusDiv.style.color = '#856404';
            
            try {
                const res = await fetch('/api/assets/upgrade', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ url: url })
                });
                const data = await res.json();
                if (data.success) {
                    statusDiv.textContent = '✅ Upgrade assets đã bắt đầu! Vui lòng đợi quá trình download và flash hoàn tất.';
                    statusDiv.style.background = '#d4edda';
                    statusDiv.style.color = '#155724';
                    showStatus('Assets upgrade started!', false);
                } else {
                    statusDiv.textContent = '❌ Lỗi: ' + (data.message || 'Unknown error');
                    statusDiv.style.background = '#f8d7da';
                    statusDiv.style.color = '#721c24';
                    showStatus('Failed: ' + (data.message || 'Unknown error'), true);
                }
            } catch (e) {
                statusDiv.textContent = '❌ Lỗi kết nối: ' + e.message;
                statusDiv.style.background = '#f8d7da';
                statusDiv.style.color = '#721c24';
                showStatus('Error: ' + e.message, true);
            }
        }
        
        function updateWakeWordSensitivity() {
            const slider = document.getElementById('wake_word_sensitivity');
            if (!slider) return;
            const value = parseFloat(slider.value);
            const db = (20 * Math.log10(value)).toFixed(1);
            const valueSpan = document.getElementById('wake_word_sensitivity_value');
            const dbSpan = document.getElementById('wake_word_sensitivity_db');
            if (valueSpan) valueSpan.textContent = value.toFixed(1);
            if (dbSpan) dbSpan.textContent = '~' + db;
        }
        
        function updateVadMinNoiseMs() {
            const slider = document.getElementById('vad_min_noise_ms');
            if (!slider) return;
            const value = parseInt(slider.value);
            const valueSpan = document.getElementById('vad_min_noise_ms_value');
            if (valueSpan) valueSpan.textContent = value;
        }
        
        // Load device information (MAC address, IP, etc.)
        async function loadDeviceInfo() {
            try {
                const response = await fetch('/api/device/info');
                if (!response.ok) {
                    throw new Error('Failed to fetch device info');
                }
                const data = await response.json();
                
                // Display MAC address
                const macElement = document.getElementById('mac-address');
                if (macElement && data.device_id) {
                    // Convert device_id (format: AA-BB-CC-DD-EE-FF) back to MAC format (AA:BB:CC:DD:EE:FF)
                    const macAddress = data.device_id.replace(/-/g, ':');
                    macElement.textContent = macAddress;
                    deviceMacAddress = macAddress;
                    tryFetchPortalMusicServers();
                    tryFetchPortalRadioChannels();
                    if(portalConfig&&!portalConfig.vip_checked)checkVipFromPortal();
                }
                
                // Display IP address
                const ipElement = document.getElementById('ip-address');
                if (ipElement && data.ip_address) {
                    ipElement.textContent = data.ip_address + (data.port ? ':' + data.port : '');
                } else if (ipElement) {
                    ipElement.textContent = 'Không có';
                }
                
                // Display Device ID
                const deviceIdElement = document.getElementById('device-id');
                if (deviceIdElement && data.device_id) {
                    deviceIdElement.textContent = data.device_id;
                }
            } catch (error) {
                console.error('Error loading device info:', error);
                deviceMacAddress = null;
                const macElement = document.getElementById('mac-address');
                if (macElement) {
                    macElement.textContent = 'Lỗi khi tải thông tin';
                    macElement.style.color = '#f44336';
                }
            }
        }
        
        // Copy MAC address to clipboard
        function copyMacAddress(event) {
            const macElement = document.getElementById('mac-address');
            if (!macElement) return;
            
            const macAddress = macElement.textContent.trim();
            if (macAddress === 'Đang tải...' || macAddress === 'Lỗi khi tải thông tin') {
                alert('MAC address chưa sẵn sàng');
                return;
            }
            
            // Get button element
            const button = event ? event.target : document.querySelector('button[onclick="copyMacAddress()"]');
            
            // Copy to clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(macAddress).then(function() {
                    // Show feedback
                    if (button) {
                        const originalText = button.textContent;
                        button.textContent = '✅ Đã copy!';
                        button.style.background = '#4caf50';
                        setTimeout(function() {
                            button.textContent = originalText;
                            button.style.background = '#667eea';
                        }, 2000);
                    }
                }).catch(function(err) {
                    console.error('Failed to copy:', err);
                    alert('Không thể copy. Vui lòng copy thủ công: ' + macAddress);
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = macAddress;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    if (button) {
                        const originalText = button.textContent;
                        button.textContent = '✅ Đã copy!';
                        button.style.background = '#4caf50';
                        setTimeout(function() {
                            button.textContent = originalText;
                            button.style.background = '#667eea';
                        }, 2000);
                    }
                } catch (err) {
                    alert('Không thể copy. Vui lòng copy thủ công: ' + macAddress);
                }
                document.body.removeChild(textArea);
            }
        }
        
        // Load device info when page loads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadDeviceInfo);
        } else {
            loadDeviceInfo();
        }
        
        // Register Service Worker for PWA
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js')
                    .then(function(registration) {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(function(err) {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }
        
        // PWA Install Banner Logic - Auto Install
        let deferredPrompt = null;
        let pwaBanner = null;
        let pwaInstallBtn = null;
        
        // Initialize PWA elements when DOM is ready
        function initPWA() {
            pwaBanner = document.getElementById('pwa-install-banner');
            pwaInstallBtn = document.getElementById('pwa-install-btn');
            
            if (!pwaBanner) {
                console.warn('PWA banner element not found');
                return;
            }
            
            console.log('PWA banner initialized');
            
            // Check if already installed
            if (isPWAInstalled()) {
                console.log('PWA already installed, hiding banner');
                pwaBanner.style.display = 'none';
                return;
            }
            
            // Check if on GitHub Pages App page (không hiển thị banner ở đó)
            if (isOnAppPage()) {
                console.log('On GitHub Pages App page, hiding banner');
                pwaBanner.style.display = 'none';
                return;
            }
            
            // Check if banner was dismissed
            if (wasBannerDismissed()) {
                console.log('PWA banner was dismissed, hiding');
                pwaBanner.style.display = 'none';
                return;
            }
            
            // Show banner after 1 second (reduced from 3 for better UX)
            setTimeout(function() {
                if (pwaBanner && !isPWAInstalled() && !wasBannerDismissed() && !isOnAppPage()) {
                    console.log('Showing PWA install banner');
                    pwaBanner.style.display = 'block';
                }
            }, 1000);
        }
        
        // Check if already installed
        function isPWAInstalled() {
            // Check if running as PWA
            if (window.matchMedia('(display-mode: standalone)').matches ||
                window.navigator.standalone === true ||
                document.referrer.includes('android-app://')) {
                return true;
            }
            // Check if on GitHub Pages App URL (user đã cài từ đó)
            const currentHost = window.location.hostname;
            if (currentHost === 'nguenvanky.github.io' && window.location.pathname.startsWith('/App/')) {
                // Nếu đang ở trang App, xem như đã cài hoặc không cần hiển thị banner
                return true;
            }
            return false;
        }
        
        // Check if banner was dismissed
        function wasBannerDismissed() {
            return localStorage.getItem('pwa-banner-dismissed') === 'true';
        }
        
        // Check if on GitHub Pages App (không hiển thị banner ở đó)
        function isOnAppPage() {
            const currentHost = window.location.hostname;
            return currentHost === 'nguenvanky.github.io' && window.location.pathname.startsWith('/App/');
        }
        
        // Show PWA install banner
        function showPWAInstallBanner() {
            if (!pwaBanner) {
                pwaBanner = document.getElementById('pwa-install-banner');
            }
            
            // Không hiển thị banner nếu đang ở trang App
            if (isOnAppPage()) {
                console.log('On GitHub Pages App page, cannot show banner');
                alert('Bạn đang ở trang cài đặt ứng dụng. Vui lòng làm theo hướng dẫn trên trang này để cài đặt.');
                return;
            }
            
            if (isPWAInstalled() || wasBannerDismissed()) {
                return;
            }
            
            if (pwaBanner) {
                console.log('Force showing PWA banner');
                pwaBanner.style.display = 'block';
            }
        }
        
        // Install PWA - Android redirect to GitHub Pages, iPhone show instructions
        function installPWA() {
            console.log('installPWA called');
            
            // Hide banner và dismiss
            if (pwaBanner) {
                pwaBanner.style.display = 'none';
            }
            localStorage.setItem('pwa-banner-dismissed', 'true');
            
            // Detect platform
            const isAndroid = /Android/.test(navigator.userAgent);
            const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
            
            if (isAndroid) {
                // Android: Redirect to GitHub Pages App để cài đặt
                console.log('Android detected - redirecting to GitHub Pages App');
                window.location.href = 'https://nguenvanky.github.io/App/';
            } else if (isIOS) {
                // iOS: Hiển thị hướng dẫn thủ công
                console.log('iOS detected - showing manual instructions');
                const instructions = 
                    '📱 Hướng dẫn cài đặt trên iPhone/iPad:\\n\\n' +
                    '1. Nhấn nút Share (mũi tên lên ⬆️) ở thanh địa chỉ\\n' +
                    '2. Cuộn xuống và chọn "Thêm vào Màn hình chính" hoặc "Add to Home Screen"\\n' +
                    '3. Nhấn "Thêm" hoặc "Add" ở góc phải trên\\n' +
                    '4. Ứng dụng sẽ xuất hiện trên màn hình chính của bạn\\n\\n' +
                    '💡 Mẹo: Bạn cũng có thể truy cập https://nguenvanky.github.io/App/ và làm theo hướng dẫn tương tự.';
                alert(instructions);
            } else {
                // Desktop hoặc browser khác: Redirect đến GitHub Pages App
                console.log('Desktop/Other browser detected - redirecting to GitHub Pages App');
                window.location.href = 'https://nguenvanky.github.io/App/';
            }
        }
        
        // Dismiss banner
        function dismissPWA() {
            if (pwaBanner) {
                pwaBanner.style.display = 'none';
            }
            localStorage.setItem('pwa-banner-dismissed', 'true');
            console.log('PWA banner dismissed');
        }
        
        // Listen for beforeinstallprompt event (Android/Chrome)
        window.addEventListener('beforeinstallprompt', function(e) {
            console.log('beforeinstallprompt event fired - browser supports automatic install');
            e.preventDefault();
            deferredPrompt = e;
            
            if (pwaInstallBtn) {
                pwaInstallBtn.textContent = 'Cài đặt ngay';
            }
            
            showPWAInstallBanner();
        });
        
        // Listen for appinstalled event
        window.addEventListener('appinstalled', function(evt) {
            console.log('PWA app was installed successfully by browser');
            if (pwaBanner) {
                pwaBanner.style.display = 'none';
            }
            localStorage.setItem('pwa-banner-dismissed', 'true');
            // Hide PWA install button when PWA is installed (Settings page - use specific ID)
            const pwaInstallButton = document.getElementById('pwa-install-button-fixed') || document.querySelector('.pwa-install-fixed');
            if (pwaInstallButton) {
                console.log('PWA installed - hiding install button');
                pwaInstallButton.style.display = 'none';
                pwaInstallButton.style.visibility = 'hidden';
            }
        });
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPWA);
        } else {
            // DOM already loaded
            initPWA();
        }
        
        // Hide PWA install button immediately if on GitHub Pages App page or PWA installed (Settings page)
        setTimeout(function() {
            const pwaInstallButton = document.getElementById('pwa-install-button-fixed') || document.querySelector('.pwa-install-fixed');
            if (pwaInstallButton) {
                const currentHost = window.location.hostname;
                const isOnApp = currentHost === 'nguenvanky.github.io' && window.location.pathname.startsWith('/App/');
                const isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                                   window.navigator.standalone === true ||
                                   (document.referrer && document.referrer.includes('android-app://'));
                if (isOnApp || isInstalled) {
                    console.log('Hiding PWA install button - on App page or PWA installed');
                    pwaInstallButton.style.display = 'none';
                    pwaInstallButton.style.visibility = 'hidden';
                }
            }
        }, 100);
        
        // Also try to show banner even if beforeinstallprompt doesn't fire
        setTimeout(function() {
            if (!isPWAInstalled() && !wasBannerDismissed()) {
                console.log('Fallback: showing banner after 2 seconds');
                showPWAInstallBanner();
            } else {
                console.log('Banner not shown - installed:', isPWAInstalled(), 'dismissed:', wasBannerDismissed());
            }
        }, 2000);
        
        // Debug: Log PWA status
        console.log('PWA Status - Installed:', isPWAInstalled(), 'Dismissed:', wasBannerDismissed());
        
        // Test function to clear dismissed state (for debugging)
        window.clearPWADismissed = function() {
            localStorage.removeItem('pwa-banner-dismissed');
            console.log('PWA dismissed state cleared, reload page to see banner');
        };
    </script>
    <!-- Load main JS from external -->
    <script src="https://nguenvanky.github.io/App/scripts/settings.min.js?v=1.0.0" 
            onerror="loadFallbackJS('settings')"></script>
</body>
</html>
`;
    
    // Inject HTML into DOM
    function injectHTML() {
        try {
            // Replace current document
            document.open();
            document.write(HTML_CONTENT);
            document.close();
            
            console.log('[JS Injector] Successfully injected Settings HTML');
        } catch (error) {
            console.error('[JS Injector] Failed to inject HTML:', error);
            document.body.innerHTML = '<div style="text-align:center;padding:50px;font-family:Arial"><h1>⚠️ Lỗi tải trang</h1><p>Không thể tải nội dung. Vui lòng kiểm tra kết nối mạng và thử lại.</p><p><a href="/">← Quay lại</a></p></div>';
        }
    }
    
    // Inject immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectHTML);
    } else {
        injectHTML();
    }
})();
