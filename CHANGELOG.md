# Changelog
---
### 13 AUG 2024
- 
---
### 12 AUG 2024
- Created `messageDetails` module; currently, only logs a message object.
- Saved `open_in_full.svg` in `/assets/icons` subdirectory. 
- The `header` component is now responsive.
- Added 'common' breakpoints for responsive design support.
---
### 10 AUG 2024
- Saved fonts `DM Sans` and `Roboto Condensed` in `fonts` subdirectory.
- Added a logo SVG to the `header` component.
- Created stylesheet for the `footer` component.
- Created a `paths` subdirectory and module.
---
### 9 AUG 2024
- Submitting a new message will redirect the client to the `messages` page.
- Divided message content in `message` template into three paragraph elements.
- No longer exporting a function from `resetForm` module.
- Installed `@iconfu/svg-inject` to dependencies.
- Created `icons` subdirectory and added `github-mark` subdirectory containing `GitHub` icons.
- Created style sheets for relative pages and components.
- Renamed `index*` files as `home*`; `*` denotes wildcard character(s).
- Created a `head` template.
- Form inputs are required to have values.
---
### 8 AUG 2024
- A new message can be created on the `new` page and will be added to a list of messages on the `messages` page.
- Provided a middleware function to handle unrecognized paths and render a 404 page.
- Clicking on the navbar links will direct the client to the appropriate page.
- Created multiple directories: `views`, `routes`, `public`, `controllers`, `utils`, `pages`, `partials`, `assets`, and `styles`.
- Defined `"type": "module` and script `"dev": "nodemon app"` in `package.json`.
- Installed `nodemond` to `devDependencies`.
- Installed `dotenv`, `ejs`, `express`, and `express-async-handler` to `dependencies`.
- Initialized npm package with `npm init`.
- Initial commit.
---