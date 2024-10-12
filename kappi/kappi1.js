function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / Kappi7581 Sms Bomber v1.0 - github.com/Kappi7581";
    } else {
        process.stdout.write('\x1b]2;' + x + " / Kappi7581 Sms Bomber v1.0 - github.com/Kappi7581" + '\x1b\x5c');
    }
}

module.exports = console_title;