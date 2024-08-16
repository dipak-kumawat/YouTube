# YouTube
Youtube clone using React, Node, MongoDB and Firebase. MERN stack app with Redux Toolkit, JWT Cookies and Firebase Storage.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview



## Features
* Watch videos without ads
* Use YouTube without Google tracking you using cookies and JavaScript
* Two extractor APIs to choose from (Built in or Invidious)
* Subscribe to channels without an account
* Connect to an externally setup proxy such as Tor
* View and search your local subscriptions, history, and saved videos
* Organize your subscriptions into "Profiles" to create a more focused feed
* Export & import subscriptions
* Youtube Trending
* Youtube Chapters
* Most popular videos page based on the set Invidious instance
* SponsorBlock 
* Open videos from your browser directly into FreeTube (with extension)
* Watch videos using an external player
* Full Theme support
* Make a screenshot of a video
* Multiple windows
* Mini Player (Picture-in-Picture)
* Keyboard shortcuts
* Option to show only family friendly content
* Show/hide functionality or elements within the app using the distraction free settings
* View channel community posts
* View most age restricted videos



## Technologies Used

- **MongoDB:** Database for storing user and product information.
- **Express.js:** Backend framework for building the server and API.
- **React:** Frontend library for building the user interface.
- **Node.js:** Runtime environment for server-side JavaScript execution.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/dipak-kumawat/YouTube.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd YouTube
   ```

3. **Install server dependencies:**
   ```sh
   cd server
   npm install
   ```

4. **Install client dependencies:**
   ```sh
   cd ../client
   npm install
   ```

5. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following:
   ```env
   MONGO = mongodb+srv://dipaksk11:dipak@youtube.qytcjz0.mongodb.net/?retryWrites=true&w=majority&appName=Youtube
   MONGO_DB = "youtube"
   JWT = "gopikishan"
   ```

6. **Start the server:**
   ```sh
   cd ../server
   npm start
   ```

7. **Start the client:**
   Open a new terminal window and navigate to the `client` directory:
   ```sh
   npm start
   ```

## Usage

- Visit `http://localhost:3000` to view the YouTube frontend.

## Project Structure

```
YouTube/
│
├── client/                # React frontend
│   ├── public/            # Public assets
│   └── src/               # React components and application logic
│       └── ...
│
├── server/                # Express backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── ...
│
└── README.md              # This README file
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact us at:
- **Email:** dipaksk11@gmail.com

Thank you for using YouTube – a video sharing platform!
