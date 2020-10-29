## What's this about?

This is a practice project to help me learn Typescript.

## How I set up the project

- Create a project directory. I called it typescript-maps. `cd` into it and create `index.html` and `src/index.ts`.
- In console, run `parcel index.html`. This uses the `parcel-bundler` npm package that compiles Typescript and allow us to run it in a browser via a local server.
- Everytime you want to run the code, use `parcel index.html`.

## External dependencies

- `parcel-bundler`
- `faker` and `@types/faker`
- Google Maps Javascript API and `@types/googlemaps`

## Notes for myself

- Convention in Typescript is to never use export default statements as it can get confusing on when to use { }.
- The killer feature of Typescript is how we use custom Interfaces to allow classes to interact with one another. Think of Interfaces as gateways.
- It is not necessary to use the `implements` method, but is helpful for helping Typescript help us to debug.
