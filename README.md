# Wanderlust ✈️

Wanderlust is a full-stack web application designed for lodging, vacation rentals, and tourism activities—similar to Airbnb. Users can browse unique accommodations worldwide, view detailed descriptions and prices, read and post reviews, and list their own properties.

## 🚀 Features

- **Listing Management (CRUD)**: Users can create, view, edit, and delete lodging listings with images, pricing, description, and location details.
- **Review System**: Users can submit star-rated reviews and leave comments on properties.
- **User Authentication**: Secure user registration (signup), login, and logout capabilities using Passport.js.
- **Form Validation**: Clean validation for all input forms (listings and reviews) handled server-side via Joi.
- **Modern Responsive Design**: Premium, responsive user interface styled with custom CSS and Bootstrap, utilizing the `ejs-mate` layout engine.
- **Database Seeding**: Easily populated database script with high-quality sample listings.
- **Serverless Ready**: Pre-configured structure for deployment on Vercel.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS, Bootstrap 5, EJS (Embedded JavaScript templates), EJS-Mate
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Local & MongoDB Atlas cloud database) via Mongoose ODM
- **Authentication**: Passport.js with Local Strategy (`passport-local-mongoose`)
- **Validation**: Joi (Object schema validation)

---

## 📁 Repository Structure

The project has been reorganized into separate client and server contexts:

```
├── client/                     # Frontend client resources
│   ├── public/                 # Static files (CSS, styling)
│   └── views/                  # EJS template views (listings, layout, includes)
├── server/                     # Backend server resources
│   ├── api/                    # Vercel serverless functions endpoint
│   ├── controllers/            # Controller logic (listings, reviews, users)
│   ├── models/                 # Mongoose database models (listing, review, user)
│   ├── routes/                 # Express routers
│   ├── utils/                  # Helper utilities and custom error handling
│   ├── app.js                  # Main Express server configuration
│   ├── schema.js               # Joi schemas for request validation
│   └── package.json            # Server dependencies
├── init/                       # Database seeding/initialization scripts
│   ├── data.js                 # Sample lodging data
│   └── index.js                # Database seeder script
├── vercel.json                 # Vercel deployment configuration
├── package.json                # Root package configurations & scripts
└── README.md                   # Project documentation
```

---

## ⚙️ Installation & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/EnggPrince2553/Wanderlust.git
cd Wanderlust
```

### 2. Install Dependencies
Install dependencies at the project root:
```bash
npm install
```

### 3. Environment Variables Configuration
Create a `.env` file inside the `server/` directory and add your connection string and session secrets:
```env
PORT=8080
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_string
```

### 4. Database Seeding
To populate the database with sample properties, run the initialization script from the root folder:
```bash
node init/index.js
```

### 5. Run the Application
Start the development server:
```bash
npm start
```
Open your browser and navigate to: **[http://localhost:8080](http://localhost:8080)**

---

## 🌐 Deployment

This application is ready to be hosted on Vercel. The routing and server entry points are pre-configured in `vercel.json` and `server/api/index.js`.
