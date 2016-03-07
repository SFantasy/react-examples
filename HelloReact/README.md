Hello React
---

In this example, you will learn:

- what react program looks like
- how to simply use react with a popular module loader named [browserify](http://browserify.org/)

## Build and run

1. Run `npm install` in the out folder

2. Install browserify golbally

    ```
    npm install browserify -g
    ```

3. Create bundled file

    ```
    browserify index.js -o bundle.js -t [ babelify --presets react ]
    ```

4. View the page in your browser
