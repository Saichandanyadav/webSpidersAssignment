```markdown
# Task Management API

## Description
The **Task Management API** is a robust system for creating, retrieving, updating, and deleting tasks. It supports operations such as priority assignment, status management, and task filtering. This API is built with scalability and simplicity in mind, enabling seamless integration and usage.

---

## Project Directory Layout

```plaintext
├── controllers/
│   └── taskController.js       # Handles task-related logic
├── models/
│   └── taskModel.js            # Mongoose schema and model for tasks
├── routes/
│   └── taskRoutes.js           # Defines task-related API endpoints
├── middlewares/
│   └── errorHandler.js         # Handles errors gracefully
├── config/
│   └── db.js                   # Database connection configuration
├── utils/
│   └── validation.js           # Utility for request validation
├── server.js                   # Entry point of the application
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
├── README.md                   # Documentation for the project
```

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Saichandanyadav/webSpidersAssignment.git
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

3. Configure the environment variables in the `.env` file:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=your_desired_port
   ```

4. Start the server:
   - Development mode:
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

---

## API Endpoints

### 1. **Create a Task**
- **Method**: `POST`
- **URL**: `/add-tasks`
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "priority": "High",
    "status": "Pending"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task created successfully",
    "task": { ...task_details }
  }
  ```

### 2. **Retrieve All Tasks**
- **Method**: `GET`
- **URL**: `/tasks`
- **Query Parameters** (Optional):
  - `status`, `priority`, `sort`, `limit`, `skip`
- **Response**:
  ```json
  {
    "message": "Tasks retrieved successfully",
    "tasks": [ ...task_list ]
  }
  ```

### 3. **Retrieve a Single Task**
- **Method**: `GET`
- **URL**: `/tasks/:id`
- **Response**:
  ```json
  {
    "message": "Task retrieved successfully",
    "task": { ...task_details }
  }
  ```

### 4. **Update a Task**
- **Method**: `PUT`
- **URL**: `/update-tasks/:id`
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "priority": "Medium",
    "status": "In Progress"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task updated successfully",
    "task": { ...updated_task_details }
  }
  ```

### 5. **Delete a Task**
- **Method**: `DELETE`
- **URL**: `/delete-tasks/:id`
- **Response**:
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

## Testing the API with Postman

Use the provided endpoints above to perform **CRUD operations** using Postman. Ensure the server is running, and input the appropriate request data to test the application effectively.

---

## Deployment

The project is deployed at:  
🔗 **[Live API URL](https://chandan-webspi-app.onrender.com)**

Use the provided endpoints to interact with the API.

Note: The data fetching is slow so Kindly wait 2-3 Min to fetch the data according to API endpoint.
---

## Follow Me

- **LinkedIn**: [Sai Chandan Yadav](https://www.linkedin.com/in/saichandanyadav/)  
- **GitHub**: [@Saichandanyadav](https://github.com/Saichandanyadav)  
- **Email**: [Saichandhanyadav2002@gmail.com](mailto:Saichandhanyadav2002@gmail.com)

---

## Thank You!
Thank you for exploring my project! I hope you find it helpful and easy to use.
