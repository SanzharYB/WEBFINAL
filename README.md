# Always Clothed Web Application

## Project Overview  
This project is a web application for "Always Clothed," an online clothing store offering a dynamic and user-friendly experience. The application includes several pages designed to allow users to browse products, view details, register/login, manage their profiles, and access helpful information such as weather updates.

---

## Features  

### Pages  
- **Home Page**: Provides an introduction to the store and navigation options.  
- **Products Page**: Allows users to filter and search products by various attributes such as gender, type, season, and price.  
- **Product Details Page**: Displays detailed information about selected products, with options for rating and comments.  
- **Registration and Login Pages**: Enable user authentication.  
  - *Registration*: Collects and validates user details.  
  - *Login*: Authenticates users with email and password.  
- **Profile Page**: Displays user-specific information and includes weather updates fetched via the Weatherbit API.  
- **Other Pages**: About Us, FAQ, and Contact Us provide additional store information and communication options.  

### Shared Components  
- **Navigation Bar and Sidebar**: Accessible across all pages for consistent navigation.  
- **Theme Toggle**: Enables switching between light and dark modes.  
- **Responsive Design**: Mobile-friendly layout with hamburger menu and sidebar for smaller screens.  

---

## File Structure  

### HTML Files  
- `log.html`: Login functionality with validation and success/error messages.  
- `product-detail.html`: Product descriptions, rating system, and comment section.  
- `products.html`: Product filtering and dynamic display grid.  
- `profile.html`: Displays user details and current weather information.  
- `registr.html`: User registration form with validation.  

### Stylesheets  
- **`styles/` folder**: Contains CSS files for each page and global styles like themes.  

### JavaScript Files  
- **`js files/` folder**: Contains scripts for specific functionalities:
  - `script.js`: Handles common interactions such as sidebar toggle and theme switch.  
  - `products.js`: Manages filters and dynamic product display.  
  - `productdetail.js`: Manages ratings, comments, and dynamic content display.  
  - **`contact.js`**: Handles form submissions on the Contact Us page, including input validation and reset functionality.  
  - **`log.js`**: Manages login functionality, authenticating users with email and password, and integrates Google Sign-In.  
  - **`registr.js`**: Handles user registration, validates input, and stores user information.  

---

## Usage  

1. Open `home.html` in a browser to start the application.  
2. Navigate using the menu or sidebar to explore pages.  
3. Interact with features like filters, rating systems, registration, and weather updates.  

### User Authentication  
- Register on the `registr.html` page and log in on `log.html` to access profile-specific features.  
- User information is stored locally in the browser for demonstration purposes.  

### Product Interaction  
- Use the filters on the `products.html` page to narrow down product searches.  
- Click on a product to view its detailed description and options for ratings/comments.  

---

## Dependencies  
- **Weatherbit API**: Provides weather data on the profile page.  
- JavaScript for dynamic and interactive features.  

---

## Development Notes  
- Ensure all required files (`.css`, `.js`, and `.html`) are in their respective directories.  
- No backend integration; localStorage is used for user data persistence.  

--- 

## Future Enhancements  
- Add backend integration for authentication and product management.  
- Improve accessibility and multi-language support.  
- Expand product rating and comment systems to a database.  

---  

**Disclaimer**: This project is for educational purposes and may require additional security and optimization measures for production use.
