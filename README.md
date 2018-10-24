# LegendCars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

# Install app

Clone this repository then run `npm install`

Create a mysql database, default is `legend_cars`

Server DB configuration (in server.js) :
```javascript
{
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'legend_cars',
  port: 8889
}
```
You can load dump.sql to store a bunch of data.

# Run app

Run `npm start` to launch the app
Front app run on 4200 port and back on 3000 port
You can run separately `nodemon server.js` and `ng serve`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
