# No Website
Simply block the websites you don't want to see

### Compatibility

It pretty much works on all browsers, I use it on <a href="https://chrome.com/" target="_blank">Chrome</a>. 

### How?

1. Clone this repository using terminal.
```
    git clone https://github.com/8xu/No-Website.git
```
2. Just go [here](chrome://extensions/) and enable `Developer` mode.
3. Click on `Load unpacked` and search for [`manifest.json`](https://github.com/8xu/No-Website/blob/master/manifest.json).

### Modifiying
If you want to modify the "blocked" websites, go to [`manifest.json`](https://github.com/8xu/No-Website/blob/master/manifest.json), and in `matches`, add your own URL like this: `*://*.google.com/*`.