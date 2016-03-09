Simple Component
---

In this example, you will learn:

- Render contents via [SimpleRenderer](./SimpleRenderer.js)
- Pass property to a component: [ComponentWithProps](./ComponentWithProps.js)
- Dynamic change data via [ComponentWithStates](./ComponentWithStates.js)

## Build and run

> If you have installed `node_modules` and `browserify` before, just run the command in 3rd point

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