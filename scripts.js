function updateTime() {
    const options = { timeZoneName: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit' };

    document.getElementById('new-york').querySelector('span').textContent =
        new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', ...options });

    document.getElementById('london').querySelector('span').textContent =
        new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', ...options });

    document.getElementById('tokyo').querySelector('span').textContent =
        new Date().toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', ...options });

    document.getElementById('sydney').querySelector('span').textContent =
        new Date().toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney', ...options });
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
