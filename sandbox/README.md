# Stryker does not work with Jest 28

```
npm install
npm test
```

Expected no error, but got an error.

Roll back to Jest 27, and it works.

```
npm install jest@27
npm test
```
