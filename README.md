# Simple Weather App using NodeJS

This is a simple Weather app which takes the location as input from the user and converts it using MapBox API into geocode and gives the weather from WeatherStack API for.

## Stack used:

1. Programming Languages:
   - JavaScript
2. Backend:
   - NodeJS
   - Postman-request
   - ExpressJS
   - Handlebars
   - Nodemon
3. Frontend:
   - HTML
   - CSS
4. APIs
   - MapBox
   - WeatherStack

## Usage:

To run the app, run:

```bash
node app.js
```

To see the help menu, run:

```bash
node app.js --help
```

```javascript
Commands:
  app.js add     Add a new note
  app.js remove  Remove a note
  app.js list    List your notes
  app.js read    Read a note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

To view specific function, run:

```bash
node app.js add --help
```

```javascript

Add a new note

Options:
  --help     Show help                                  [boolean]
  --version  Show version number                        [boolean]
  --title    Note title                                 [string] [required]
  --body     Note body                                  [string] [required]
```
