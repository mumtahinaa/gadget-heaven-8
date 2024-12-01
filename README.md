# GadgetHaven - E-Commerce Platform

GadgetHaven is a sleek e-commerce platform designed for gadget enthusiasts. It allows users to browse through various product categories, add items to their cart or wishlist, and experience seamless navigation across the site. The project is based on a detailed Figma design and adheres to modern React development practices.

---

## Live Website
[**Visit GadgetHaven**](https://gadget-heaven-14.netlify.app/)  


---

## Requirement Document
[**View Requirement Document**](https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-mumtahinaa)  


---

## Key Features

1. **Dynamic Product Categories**  
   Displays gadgets sorted by categories with an intuitive sidebar for quick navigation.  
   
2. **Shopping Cart & Wishlist**  
   - Add gadgets to the shopping cart and wishlist with persistent local storage.  
   - Prevent duplicate wishlist entries and display toast notifications.  

3. **Product Sorting**  
   Sort items in the cart by price in descending order for a better purchasing decision.  

4. **Interactive Details Page**  
   Each gadget has a dedicated details page showcasing its specifications, price, availability, and user rating.  

5. **Smooth User Experience**  
   - Modal-based confirmation for purchases with automatic cart clearance.  
   - Dynamic page titles and a favicon for a professional touch.  

---

## React Concepts Used

- **Functional Components**: Built with reusable and modular components.  
- **React Router**: For page navigation and dynamic routing based on product IDs.  
- **useState & useEffect Hooks**: Managed states and side effects for cart, wishlist, and pricing logic.  
- **useLocation Hook**: Dynamically updated the background style of the navbar.  
- **useNavigate Hook**: Redirected users to the home page after purchase.  

---

## Data Handling and Management

- **LocalStorage**:  
  - Persistent data storage for the cart and wishlist.  
  - Ensures data is retained even after the browser is refreshed.  

- **Toast Notifications**:  
  Provides feedback to users when items are added to the cart, wishlist, or removed.

---

## Additional Features and Enhancements
  
- **Custom Modals**: Congratulate users on a successful purchase using a stylish modal.  
- **Rating System**: Display product ratings dynamically with React Stars.  
- **Nested Layouts**: Implemented category-based filtering with React Router nested layouts.  
- **Edge Case Handling**:  
  - Disabled buttons for already-added wishlist items.  
  - Error prevention for empty or invalid cart actions.  

---