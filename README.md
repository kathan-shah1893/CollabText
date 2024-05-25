# CollabText

CollabText is a real-time collaborative text editor built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows multiple users to edit documents simultaneously, providing a seamless and synchronized editing experience similar to Google Docs.

## Features

- Real-time collaborative editing
- User authentication and authorization
- Document creation, editing, and deletion
- Rich text formatting options
- WebSocket-based real-time updates

## Technologies Used

- **Frontend**: React.js, Quill.js (for rich text editing)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Styling**: Material-UI, CSS-in-JS

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/collabtext.git
    cd collabtext
    ```

2. **Install server dependencies**
    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies**
    ```bash
    cd ../client
    npm install
    ```

4. **Create a `.env` file in the server directory with the following content**
    ```plaintext
    MONGO_URL=mongodb://localhost:27017/collabtext
    PORT=8000
    ```

5. **Start the MongoDB server**
    ```bash
    mongod
    ```

6. **Start the backend server**
    ```bash
    cd server
    npm start
    ```

7. **Start the frontend development server**
    ```bash
    cd ../client
    npm start
    ```

## Usage

1. **Navigate to** `http://localhost:3000` in your web browser.
2. **Sign up or log in** to your account.
3. **Create a new document** or open an existing document.
4. **Start editing** and see real-time updates as other users join and make changes.

## Project Structure