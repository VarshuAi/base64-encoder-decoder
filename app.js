
            const plain = document.getElementById('text-input');
            const base64 = document.getElementById('base64-output');

            document.getElementById('btn-encode').addEventListener('click', () => {
                try {
                    base64.value = btoa(unescape(encodeURIComponent(plain.value)));
                } catch(e) {
                    alert('Encoding error: ' + e.message);
                }
            });
            
            document.getElementById('btn-decode').addEventListener('click', () => {
                try {
                    plain.value = decodeURIComponent(escape(atob(base64.value)));
                } catch(e) {
                    alert('Invalid Base64 string for decoding!');
                }
            });
        