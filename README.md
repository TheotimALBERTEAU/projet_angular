# 🌐 ANGULAR PROJECT - Articles Application

**Author:** Théotim ALBERTEAU

This repository holds the front-end application developed with **Angular**. It includes all pages required for the course, along with an additional "Settings" page.

---

# 🚀 Online Access (Front-end Deployment)

The Front-end application is deployed for free on **Netlify** and is accessible at the following address:

**Application URL:** [Projet_Angular](https://theotimalberteau.github.io/projet_angular/)

---

# ⚠️ Important Note on the API

This Angular application connects to a separate Back-end API that handles all data operations.

**Production API Back-end URL:** [URL BackEnd](https://projet-angular-back-24h5.onrender.com)

The API source code is available in a separate repository: [Projet_Angular_BackEnd](https://github.com/TheotimAlberteau/projet_angular_back.git)

---

# 💻 Local Installation and Setup

To run the project locally, you must launch the Front-end application (this repository) and the Back-end API **separately**.

### Prerequisites

* Install **Node.js** (recommended version 18+).
* Have access to the API source code (see separate repository).
* Launch the Back-end API (Follow the API repository's README to start it on `http://localhost:3000`).

### 🛠️ Configuration for Local Development

Before running the Angular application, you must configure the API URL to point to your local server.

1.  **Locate Service Files:** Find the three Angular service files (`.service.ts`) responsible for API calls.
2.  **Modify `ApiUrl`:** In **each of these three service files**, update the `public ApiUrl` variable from the production Render URL to the local URL:

    ```typescript
    // Change this (production):
    public ApiUrl = 'https://projet-angular-back-24h5.onrender.com';
    
    // To this (local development):
    public ApiUrl = 'http://localhost:3000'; 
    ```

### Steps to Run (Angular Front-end)

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/TheotimAlberteau/projet_angular.git
    cd projet_angular
    ```

2.  **Install Angular Dependencies:**
    ```bash
    npm install
    ```

3.  **Launch the Application:**
    ```bash
    ng serve
    ```
    The application will automatically open in your browser at `http://localhost:4200`.

> **💡 Verification:** The application is configured to use `http://localhost:3000` for API calls in development mode. 
> If the API is not running **and** the `ApiUrl` is not set to `localhost`, the application will fail to load articles and authenticate.

---

# 📧 Contact

In case of a technical problem or for any questions, you can contact me at the following email address:
`theotim.alberteau@supdevinci-edu.fr`
