# 🇺​​​​​🇱​​​​​🇹​​​​​🇮​​​​​🇲​​​​​🇦​​​​​🇹​​​​​🇪​​​​​-🇲​​​​​🇴​​​​​🇳​​​​​🇴​​​​​🇷​​​​​🇪​​​​​🇵​​​​🇴​​​​​

## Tech Stack

- typescript
- eslint
- husky
- jest
- lerna
- yarn Workspaces
- Vite (react)
- storybook
- TailwindCss


## Modules

### models
a shared files for all the packages, that's a natural place to place your typescript definition and interfaces

###  api
an express based backend module
###  components
a storybook based react library made to be shared across multiple packages
### frontend
a ViteJS based frontend with react


### Typescript
#### [tsconfig-paths](https://github.com/dividab/tsconfig-paths#readme)

makes the magic happen with module reloading.
without it you'll get

`[ERROR] 17:28:01 Error: Cannot find module 'D:\devl\vite-monorepo\node_modules\@ultimate-monorepo\models\dist\index.js'. Please verify that the package.json has a valid "main" entry` error.

also the `tsnd` reload wont work

### References

- [NiGhTTraX/ts-monorepo](https://github.com/NiGhTTraX/ts-monorepo)

- [SatadruBhattacharjee/monorepo-fullstack-typescript-react-express-jest-cypress
  ](https://github.com/SatadruBhattacharjee/monorepo-fullstack-typescript-react-express-jest-cypress)
