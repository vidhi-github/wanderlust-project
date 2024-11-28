# **Wanderlust**  

**Wanderlust** is a comprehensive web application designed to enable users to explore and review travel destinations while ensuring robust data security and access control through authentication, authorization, and role-based access control (RBAC). Built using modern web technologies, the project follows the **MVC Architecture** to ensure scalability, modularity, and maintainability.

---

## **Features**  

1. **Authentication, Authorization, and RBAC**  
   - **Secure Sign-Up and Login**:  
     Users are required to register and authenticate their credentials to access the platform's features.  
   - **Role-Based Access Control**:  
     - Admins can create, edit, and delete their own listings (places).  
     - Users can add reviews to places but can only edit or delete their own reviews.  
   - **Granular Permissions**:  
     Authorization ensures that only the rightful owner of a listing or review can modify it.  
   - **Session Management**:  
     Cookies and tokens are used to securely maintain user sessions.  

2. **Middleware and Error Handling**  
   - Middleware ensures data validation, request authorization, and secure handling of operations.  
   - Comprehensive error handling guarantees application stability during invalid or unexpected requests.  

3. **Map and GeoCoding Integration**  
   - Integrated maps and geocoding APIs allow users to visualize and locate the listed destinations with ease.  

4. **REST APIs**  
   - A robust set of RESTful APIs supports CRUD operations for listings, reviews, and user management.  

5. **Cloud Database Service**  
   - Data is securely stored and managed using a cloud-based MongoDB database for scalability and reliability.  

6. **Deployment**  
   - The application is deployed on **Render**, ensuring accessibility, high availability, and seamless user experience.

---

## **Technology Stack**  

| **Category**               | **Technology**                  |  
|-----------------------------|----------------------------------|  
| **Backend Framework**       | Node.js, Express.js             |  
| **Database**                | MongoDB (Cloud Database)        |  
| **Architecture**            | MVC (Models, Views, Controllers)|  
| **APIs**                    | REST APIs                       |  
| **Authentication & RBAC**   | Secure Authentication, Role-Based Access Control |  
| **Session Management**      | Cookies and Tokens              |  
| **Maps and Geocoding**      | GeoCoding APIs                  |  
| **Deployment**              | Render                          |  

---

## **Installation and Setup**  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root directory and add the following:  
   ```env
   DATABASE_URI=<your_mongo_db_uri>
   JWT_SECRET=<your_jwt_secret>
   API_KEY=<your_geocoding_api_key>
   ```

4. **Run the Application**  
   ```bash
   npm start
   ```
   The application will be live at `http://localhost:3000`.

---

## **Folder Structure**  

```
Wanderlust/
├── models/          # Database Models (User, Place, Review)  
├── controllers/     # Controllers for handling API logic  
├── middleware/      # Authentication and validation middleware  
├── routes/          # API Routes for places, reviews, and users  
├── utils/           # Helper functions and utilities  
├── public/          # Static assets (optional)  
├── views/           # HTML views (if required for rendering)  
├── .env             # Environment variables  
├── app.js           # Main application entry point  
├── package.json     # Dependency management  
```

---

## **Key Features and Implementation Details**  

### **Authentication & Authorization**  
- **Sign-Up, Login, Logout**: Protects user accounts and ensures only authenticated users can access the application.  
- **RBAC**: Differentiates admin and user roles to grant specific permissions.  

### **GeoCoding and Map Integration**  
- Dynamically fetches location data using GeoCoding APIs to provide accurate mapping features.  

### **Error Handling**  
- Handles edge cases, such as invalid data inputs or unauthorized access, through centralized middleware.  

### **Secure Data Management**  
- Cloud-based MongoDB ensures secure, scalable storage for user and place data.  

---

## **API Endpoints**  

| **Method** | **Endpoint**              | **Description**                                     | **Access**          |  
|------------|---------------------------|-----------------------------------------------------|---------------------|  
| `POST`     | `/api/auth/signup`        | Register a new user                                | Public              |  
| `POST`     | `/api/auth/login`         | Log in to an account                               | Public              |  
| `GET`      | `/api/places`             | Get all listed places                              | Public              |  
| `POST`     | `/api/places`             | Create a new place                                 | Admin Only          |  
| `PATCH`    | `/api/places/:id`         | Edit a listing                                     | Admin (Owner Only)  |  
| `DELETE`   | `/api/places/:id`         | Delete a listing                                   | Admin (Owner Only)  |  
| `POST`     | `/api/reviews`            | Add a review to a place                           | Logged-In Users     |  
| `PATCH`    | `/api/reviews/:id`        | Edit a review                                     | Review Creator Only |  
| `DELETE`   | `/api/reviews/:id`        | Delete a review                                   | Review Creator Only |  

---

## **Deployment**  

The project is deployed on **Render** and can be accessed on [(https://wanderlust-project-ts78.onrender.com/listings)].

---

## **Future Enhancements**  
- **Enhanced Search Filters**: Add advanced filters to search for places based on ratings, categories, and user preferences.  
- **Mobile Responsiveness**: Develop a responsive frontend for better usability across devices.  
- **Admin Dashboard**: Introduce a dashboard to manage listings and monitor reviews effectively.  
- **Social Sharing**: Allow users to share their favorite places directly to social media platforms.  

---

## **Contributing**  

Contributions are welcome! Follow the steps below:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Make changes and commit (`git commit -m "Add feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a Pull Request.  

---

## **License**  
This project is licensed under the MIT License. See the `LICENSE` file for more details.  

---

**Developed by:** VIDHI JINDAL
Feel free to reach out for collaboration or queries!  

