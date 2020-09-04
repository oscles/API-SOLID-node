# Basic API applying SOLID principles with node JS and typescript

## Edit config.ts file

Only you should edit __USER__ and __PASSWORD__ adding your email and password

```js
const __USER__ = 'example@gmail.com'
const __PASSWORD__ = '1232564'
```

## Run

npm install or yarn install

- run using

```json
"scripts": {
    "start:dev": "nodemon",
    "build": "rimraf ./build && tsc",
    "start:prod": "npm run build && node build/server.js",
    "lint": "eslint . --ext .ts,.js",
    "lint:fix": "npm run lint -- --fix"
  }
  ```
