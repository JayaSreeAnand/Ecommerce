# Gantham E-Commerce Project

This is a full-stack e-commerce web application featuring a React frontend and a Node.js/Express backend with MongoDB. The application allows users to browse products, manage a shopping cart, and complete orders with payment integration.

## Features

- Responsive React frontend with dynamic routing
- Theme toggling between light and dark modes
- Product listing, details, and search functionality
- User authentication and login (planned)
- Shopping cart management
- Order confirmation and payment processing
- RESTful API backend with Express and MongoDB
- Modular and maintainable code structure

## Setup Instructions

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your MongoDB connection string and other environment variables.
4. Start the backend server:
   ```
   node server.js
   ```
   The backend server will run on port 5000 by default.

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm start
   ```
   The frontend will run on port 3000 by default.

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the frontend.
- Browse products, add items to the cart, and proceed to payment.
- Use the navigation bar to access different pages including Home, About, Login, and Payment.

## Future Improvements

- Add user authentication and authorization
- Enhance payment integration with more providers
- Implement product search and filtering
- Add admin dashboard for product and order management

## License

This project is licensed under the MIT License.
