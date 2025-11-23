// Auto-generated JavaScript for Servo page
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
    <title>Servo Calibration</title>
    <!-- Load CSS from external -->
    <link rel="stylesheet" href="https://nguenvanky.github.io/App/styles/servo.min.css?v=1.0.0" 
          onerror="loadFallbackCSS('servo')">
    <!-- Fallback CSS (minimal inline for offline mode) -->
    <noscript>
        <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        h1 {
            color: #ff9800;
            text-align: center;
            margin-bottom: 30px;
        }
        .back-link {
            display: inline-block;
            margin-bottom: 20px;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            transition: all 0.3s;
        }
        .back-link:hover {
            background: #764ba2;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .control-section {
            margin-bottom: 30px;
        }
        .section-title {
            color: #ff9800;
            font-size: 20px;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #ff9800;
        }
        .servo-controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }
        .servo-card {
            padding: 15px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border: 2px solid #ffe6cc;
        }
        .servo-card h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
            color: #ff9800;
        }
        .servo-control {
            margin-bottom: 15px;
        }
        .servo-control label {
            display: block;
            margin-bottom: 5px;
            font-size: 13px;
            color: #333;
        }
        .servo-control input[type="range"] {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: #ddd;
            outline: none;
        }
        .servo-control input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #ff9800;
            cursor: pointer;
        }
        .servo-control input[type="range"]::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #ff9800;
            cursor: pointer;
            border: none;
        }
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
            margin-bottom: 8px;
        }
        .btn-position {
            background: #4CAF50;
            color: white;
        }
        .btn-position:hover {
            background: #45a049;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .btn-trim {
            background: #ff9800;
            color: white;
        }
        .btn-trim:hover {
            background: #f57c00;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .btn-reload {
            background: #2196F3;
            color: white;
            padding: 15px 30px;
            margin-top: 15px;
        }
        .btn-reload:hover {
            background: #1976D2;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .status-text {
            font-size: 11px;
            color: #666;
            margin-left: 5px;
        }
        .status-text.saving { color: #2196F3; }
        .status-text.saved { color: #4CAF50; }
        .status-text.error { color: #f44336; }
        .hint {
            font-size: 12px;
            color: #666;
            margin-bottom: 20px;
            padding: 10px;
            background: #fff5e6;
            border-radius: 6px;
        }
        </style>
    </noscript>
</head>
<body>
    <div class="container">
        <a href="/otto" class="back-link">← Quay lại Otto Control</a>
        <h1>⚙️ Servo Calibration (Điều Chỉnh Góc Servo)</h1>
        
        <div class="hint">
            Điều chỉnh góc của từng servo (0-180 độ) và trim (-50 đến +50 độ). Trim được lưu vĩnh viễn.
        </div>
        
        <div class="control-section">
            <div id="servo-controls" class="servo-controls">
                <!-- Servo controls will be generated by JavaScript -->
            </div>
            
            <div style="text-align: center;">
                <button class="btn btn-reload" onclick="loadTrims()">🔄 Reload Trims</button>
                <button class="btn btn-reload" onclick="clearLog()" style="margin-left: 10px; background: #f44336;">🗑️ Clear Log</button>
            </div>
        </div>
        
        <div class="control-section" style="margin-top: 30px; background: #ffffff; border: 2px solid #4caf50; padding: 20px;">
            <h2 style="color: #333; margin-bottom: 15px; font-size: 18px; font-weight: bold;">📋 Activity Log (Nhật Ký Hoạt Động)</h2>
            <div id="servo-log" style="background: #f5f5f5; border: 2px solid #ddd; border-radius: 8px; padding: 15px; max-height: 400px; min-height: 150px; overflow-y: auto; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.8; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
                <div style="color: #666; font-style: italic; padding: 10px;">Log sẽ hiển thị ở đây khi bạn thực hiện các thao tác...</div>
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
    </script>
    <script src="https://nguenvanky.github.io/App/scripts/servo.min.js?v=1.0.0" 
            onerror="loadFallbackJS('servo')"></script>
    
    <!-- Fallback JS (minimal inline for offline mode) -->
    <noscript>
    <script>
        // Minimal fallback functions
        function addLog(message, type) {
            console.log('[Log]', message, type);
        }
        function clearLog() {
            console.log('Log cleared');
        }
        // Servo calibration functions
        const servoNames = [
            {index: 0, name: 'Left Leg', type: 'left_leg'},
            {index: 1, name: 'Right Leg', type: 'right_leg'},
            {index: 2, name: 'Left Foot', type: 'left_foot'},
            {index: 3, name: 'Right Foot', type: 'right_foot'},
            {index: 4, name: 'Left Hand', type: 'left_hand'},
            {index: 5, name: 'Right Hand', type: 'right_hand'}
        ];
        
        // Debounce timers for trim updates
        const trimDebounceTimers = {};
        
        // Logging functions
        function addLog(message, type = 'info') {
            const logContainer = document.getElementById('servo-log');
            if (!logContainer) {
                console.error('Log container not found!');
                return;
            }
            
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = document.createElement('div');
            logEntry.style.marginBottom = '8px';
            logEntry.style.padding = '4px 8px';
            logEntry.style.borderLeft = '3px solid';
            
            let color = '#333';
            let borderColor = '#999';
            if (type === 'success') {
                color = '#2e7d32';
                borderColor = '#4caf50';
            } else if (type === 'error') {
                color = '#c62828';
                borderColor = '#f44336';
            } else if (type === 'warning') {
                color = '#e65100';
                borderColor = '#ff9800';
            } else {
                borderColor = '#2196f3';
            }
            
            logEntry.style.color = color;
            logEntry.style.borderLeftColor = borderColor;
            logEntry.style.backgroundColor = type === 'error' ? '#ffebee' : (type === 'success' ? '#e8f5e9' : (type === 'warning' ? '#fff3e0' : '#f5f5f5'));
            logEntry.innerHTML = \`<span style="color: #757575; font-weight: bold;">[\${timestamp}]</span> \${message}\`;
            
            // Remove placeholder message if it exists
            const firstChild = logContainer.firstChild;
            if (firstChild && (firstChild.textContent.includes('Log sẽ hiển thị') || firstChild.textContent.includes('Log đã được xóa'))) {
                logContainer.removeChild(firstChild);
            }
            
            logContainer.appendChild(logEntry);
            
            // Auto-scroll to bottom
            setTimeout(() => {
                logContainer.scrollTop = logContainer.scrollHeight;
            }, 10);
            
            // Keep only last 100 entries
            while (logContainer.children.length > 100) {
                logContainer.removeChild(logContainer.firstChild);
            }
            
            console.log('Log added:', message, type);
        }
        
        function clearLog() {
            const logContainer = document.getElementById('servo-log');
            if (logContainer) {
                logContainer.innerHTML = '<div style="color: #666; font-style: italic; padding: 10px;">Log đã được xóa...</div>';
                console.log('Log cleared');
            } else {
                console.error('Log container not found for clear!');
            }
        }
        
        // Test log on page load
        window.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                addLog('📋 Trang Servo Calibration đã sẵn sàng', 'success');
            }, 500);
        });
        
        function createServoControl(servo) {
            const div = document.createElement('div');
            div.className = 'servo-card';
            div.innerHTML = \`
                <h3>\${servo.name}</h3>
                <div class="servo-control">
                    <label>Position (0-180°): <span id="pos_\${servo.index}">90</span>°</label>
                    <input type="range" id="servo_pos_\${servo.index}" min="0" max="180" value="90" 
                           oninput="updateServoPosition(\${servo.index}, this.value)">
                </div>
                <div class="servo-control">
                    <label>Trim (-50 to +50°): <span id="trim_\${servo.index}">0</span>° <span id="trim_status_\${servo.index}" class="status-text"></span></label>
                    <input type="range" id="servo_trim_\${servo.index}" min="-50" max="50" value="0" 
                           oninput="updateServoTrim('\${servo.type}', \${servo.index}, this.value)">
                </div>
                <button class="btn btn-position" onclick="setServoPosition(\${servo.index}, document.getElementById('servo_pos_\${servo.index}').value)">
                    Set Position
                </button>
                <button class="btn btn-trim" onclick="setServoTrimNow('\${servo.type}', \${servo.index})">
                    Save Trim Now
                </button>
            \`;
            return div;
        }
        
        function initServoControls() {
            const container = document.getElementById('servo-controls');
            if (!container) {
                console.warn('Servo controls container not found');
                return;
            }
            
            container.innerHTML = '';
            servoNames.forEach(servo => {
                container.appendChild(createServoControl(servo));
            });
            
            loadTrims();
        }
        
        function updateServoPosition(index, value) {
            const display = document.getElementById('pos_' + index);
            if (display) {
                display.textContent = value;
            }
        }
        
        function updateServoTrim(type, index, value) {
            const display = document.getElementById('trim_' + index);
            const status = document.getElementById('trim_status_' + index);
            if (display) {
                display.textContent = value;
            }
            if (status) {
                status.textContent = '(changing...)';
                status.className = 'status-text saving';
            }
            
            // Clear existing timer
            if (trimDebounceTimers[type]) {
                clearTimeout(trimDebounceTimers[type]);
            }
            
            // Debounce: save after 500ms of no changes
            trimDebounceTimers[type] = setTimeout(() => {
                setServoTrim(type, value, index);
            }, 500);
        }
        
        function setServoTrimNow(servoType, index) {
            const slider = document.getElementById('servo_trim_' + index);
            if (slider) {
                const value = parseInt(slider.value);
                setServoTrim(servoType, value, index, true);
            }
        }
        
        function setServoPosition(servoIndex, position) {
            const pos = parseInt(position);
            if (isNaN(pos) || pos < 0 || pos > 180) {
                alert('Invalid position: must be between 0 and 180');
                addLog(\`❌ Invalid position: \${position} (must be 0-180)\`, 'error');
                return;
            }
            
            const servoName = servoNames.find(s => s.index === parseInt(servoIndex))?.name || \`Servo \${servoIndex}\`;
            addLog(\`🔄 Setting \${servoName} (Index: \${servoIndex}) to position \${pos}°...\`, 'info');
            
            fetch('/api/otto/servo/position', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ servo_index: parseInt(servoIndex), position: pos })
            })
            .then(r => {
                if (!r.ok) {
                    throw new Error('HTTP ' + r.status);
                }
                return r.json();
            })
            .then(d => {
                if (d.success) {
                    console.log('Servo position set successfully:', servoIndex, pos);
                    addLog(\`✅ \${servoName} (Index: \${servoIndex}) set to position \${pos}° successfully\`, 'success');
                } else {
                    console.error('Error setting position:', d.error);
                    addLog(\`❌ Error setting \${servoName} position: \${d.error || 'Unknown error'}\`, 'error');
                    alert('Error: ' + (d.error || 'Unknown error'));
                }
            })
            .catch(e => {
                console.error('Error setting servo position:', e);
                addLog(\`❌ Error setting \${servoName} position: \${e.message}\`, 'error');
                alert('Error: ' + e.message);
            });
        }
        
        function setServoTrim(servoType, trimValue, index, immediate = false) {
            const trim = parseInt(trimValue);
            if (isNaN(trim) || trim < -50 || trim > 50) {
                console.error('Invalid trim value:', trim);
                return;
            }
            
            const status = document.getElementById('trim_status_' + index);
            if (status && !immediate) {
                status.textContent = '(saving...)';
                status.className = 'status-text saving';
            }
            
            fetch('/api/otto/servo/trim', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ servo_type: servoType, trim_value: trim })
            })
            .then(r => {
                if (!r.ok) {
                    throw new Error('HTTP ' + r.status);
                }
                return r.json();
            })
            .then(d => {
                if (d.success) {
                    console.log('Servo trim set successfully:', servoType, trim);
                    const servoName = servoNames.find(s => s.type === servoType)?.name || servoType;
                    addLog(\`✅ \${servoName} trim set to \${trim}°\`, 'success');
                    if (status) {
                        status.textContent = '(saved)';
                        status.className = 'status-text saved';
                        setTimeout(() => {
                            status.textContent = '';
                            status.className = 'status-text';
                        }, 2000);
                    }
                } else {
                    console.error('Error setting trim:', d.error);
                    const servoName = servoNames.find(s => s.type === servoType)?.name || servoType;
                    addLog(\`❌ Error setting \${servoName} trim: \${d.error || 'Unknown error'}\`, 'error');
                    if (status) {
                        status.textContent = '(error)';
                        status.className = 'status-text error';
                    }
                    if (immediate) {
                        alert('Error: ' + (d.error || 'Unknown error'));
                    }
                }
            })
            .catch(e => {
                console.error('Error setting servo trim:', e);
                if (status) {
                    status.textContent = '(error)';
                    status.className = 'status-text error';
                }
                if (immediate) {
                    alert('Error: ' + e.message);
                }
            });
        }
        
        function loadTrims() {
            fetch('/api/otto/servo/trims')
            .then(r => {
                if (!r.ok) {
                    throw new Error('HTTP ' + r.status);
                }
                return r.json();
            })
            .then(d => {
                if (!d || typeof d !== 'object') {
                    console.warn('Invalid trims data:', d);
                    return;
                }
                
                servoNames.forEach((servo) => {
                    const trimValue = d[servo.type];
                    if (trimValue === undefined || trimValue === null) {
                        console.warn('Trim value not found for:', servo.type);
                        return;
                    }
                    
                    const trimSlider = document.getElementById('servo_trim_' + servo.index);
                    const trimDisplay = document.getElementById('trim_' + servo.index);
                    
                    if (trimSlider) {
                        trimSlider.value = trimValue;
                    }
                    if (trimDisplay) {
                        trimDisplay.textContent = trimValue;
                    }
                });
                console.log('Trims loaded successfully');
                addLog('📥 Trims loaded successfully', 'success');
            })
            .catch(e => {
                console.error('Error loading trims:', e);
                // Don't show alert on page load, just log
            });
        }
        
        // Initialize servo controls on page load
        window.addEventListener('DOMContentLoaded', initServoControls);
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initServoControls);
        } else {
            initServoControls();
        }
        </script>
    </noscript>
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
            
            console.log('[JS Injector] Successfully injected Servo HTML');
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
