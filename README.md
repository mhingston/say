A poor man's [`say`](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/say.1.html) (for Linux).

1) Clone/download this repo.
2) Change to the project directory and `npm install`.
3) Move the project directory to `/opt` or wherever you want.
4) Move `bin/say` to `/usr/local/bin/say` or somewhere on your `PATH`. Make sure the shell script is pointing to the correct path in the step above (default: `/opt/say/say.js`).
5) You'll need to change the `executablePath` in `say.js` if Google Chrome isn't installed to `/opt/google/chrome/chrome`.

Usage:

```bash
say hello world
```

There's a delay of a few seconds (on my setup atleast) whilst the virtual frame buffer server and Chrome startup.