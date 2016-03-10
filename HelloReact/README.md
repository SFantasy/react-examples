Hello React
---

In this example, you will learn:

- what react program looks like
- how to simply use react with [browserify](http://browserify.org)
- how to simply use react with [webpack](http://webpack.github.io)

## Build and run

1. Run `npm install` in the out folder

2. Install browserify golbally

    ```
    npm install browserify -g
    ```

3. Create bundled file
    - Use browserify

        ```
        browserify index.js -o bundle.js -t [ babelify --presets react ]
        ```
    - (or) Use webpack (using [webpack.config.js](./webpack.config.js))

        ```
        webpack
        ```

4. View the page in your browser
