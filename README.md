# Ingia Drive Car Rentals

A responsive car-rental website built with plain HTML, CSS, and JavaScript. No build tools or package installation are required.

## Run the site

Open `index.html` in a web browser. Use the **Dashboard** menu in the top navigation to open the renter or manager dashboard.

## Pages and files

- `index.html` — rental home page, car listings, search form, About, and Services.
- `renter-dashboard.html` — sample renter trip, rental-history, and rewards overview.
- `manager-dashboard.html` — sample fleet, reservation, and revenue overview.
- `style.css` — shared page styles and responsive layouts.
- `dashboard.js` — opens and closes the left-side menu on dashboard pages.
- `Audi.jpg`, `ferrari.jpg`, `ferrari1.jpg`, `gle.jpg`, `hyundai.jpg`, `mazda.jpg`, `prado.jpg` — vehicle and page images.

Keep the HTML, CSS, JavaScript, and image files together in the same folder so the relative links continue to work.

## Demo limitations

The renter and manager dashboards display sample data and are not connected to accounts or a booking database. The manager page is not access-protected, so do not put real customer or business data there. The home-page search currently jumps to the car listings; it does not check availability or filter cars by location or date.
