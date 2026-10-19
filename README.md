# 📚 Daily Reads — Blog Website

![Blog Website Docker CI](https://github.com/KattadigeHiruniDineka/blogwebsite/actions/workflows/docker-ci.yml/badge.svg)

A simple and responsive blog website developed using HTML, CSS, and JavaScript. Daily Reads allows users to explore articles about technology, programming, and lifestyle. The project also includes Docker containerization, GitHub Actions CI, and Vercel deployment.

## 🌐 Live Demo

**Visit the website:** [Daily Reads — Live Website](https://blogwebsite-topaz-six.vercel.app/)

**GitHub Repository:** [Blog Website Source Code](https://github.com/KattadigeHiruniDineka/blogwebsite)

## 📖 Project Overview

Daily Reads is a student group project designed to share useful knowledge, ideas, technology trends, and inspiring stories through a simple blog interface.

The website provides a homepage, featured article cards, search functionality, category filtering, article details, and an About section.

The project demonstrates frontend development, version control, containerization, continuous integration, and web deployment.

## ✨ Features

- **Responsive Homepage:** A clean homepage introducing the Daily Reads blog.
- **Article Cards:** Displays featured articles with images, categories, titles, and descriptions.
- **Article Search:** Allows users to search for articles.
- **Category Filtering:** Filters articles by Technology, Programming, and Lifestyle.
- **Article Details:** Provides a popup for viewing article details.
- **Navigation Bar:** Links to Home, Articles, and About sections.
- **Docker Support:** Runs the static website using Docker and Nginx.
- **Docker Compose:** Simplifies building and running the Docker container.
- **GitHub Actions CI:** Automatically checks required files and builds the Docker image.
- **Vercel Deployment:** Makes the website accessible online.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Search, category filtering, and article interactions |
| Docker | Containerization |
| Nginx | Serves the static website inside Docker |
| Docker Compose | Container configuration and management |
| Git and GitHub | Version control and collaboration |
| GitHub Actions | Automated CI workflow |
| Vercel | Website hosting and deployment |

## 📂 Project Structure

```text
blogwebsite/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── README.md
│
└── .github/
    └── workflows/
        └── docker-ci.yml
```

## 🚀 Run the Project Locally

### Prerequisites

- Git
- Docker Desktop
- A web browser

### 1. Clone the Repository

```bash
git clone https://github.com/KattadigeHiruniDineka/blogwebsite.git
```

### 2. Open the Project Folder

```bash
cd blogwebsite
```

### 3. Build and Run with Docker Compose

```bash
docker compose up --build -d
```

### 4. Open the Website

Visit the following address in your browser:

http://localhost:8080

### 5. Stop the Container

```bash
docker compose down
```

## 🐳 Docker Configuration

The project uses a Dockerfile based on the lightweight Nginx Alpine image to serve the static website.

The Docker configuration copies the HTML, CSS, and JavaScript files into the Nginx web directory and exposes port 80 inside the container.

Docker Compose maps port `8080` on the host machine to port `80` inside the container.

This allows the website to run locally at `http://localhost:8080`.

## ⚙️ Continuous Integration with GitHub Actions

The project includes a GitHub Actions workflow located at:

`.github/workflows/docker-ci.yml`

The workflow runs when code is pushed to the `main` branch or when a pull request targets the `main` branch.

### CI Workflow Steps

1. Checks out the repository code.
2. Verifies that the required website and Docker files exist.
3. Builds the Docker image.
4. Reports whether the workflow succeeds or fails.

The workflow status badge at the top of this README displays the latest status of the Docker CI workflow.

**Note:** The CI workflow builds the Docker image. It does not automatically deploy the Docker container to a production server.

## ☁️ Deployment with Vercel

The Daily Reads website is deployed using Vercel.

**Live URL:** https://blogwebsite-topaz-six.vercel.app/

Vercel hosts the static website and provides a public URL that users can access through a web browser.

When the GitHub repository is connected to Vercel, new deployments can be triggered by pushes to the configured production branch.

The Vercel deployment is separate from the Docker CI workflow.


## 🧪 Testing

The following areas should be tested before submission:

- Homepage and navigation links.
- Article search functionality.
- Category filtering.
- Article details popup.
- Responsive layout on different screen sizes.
- Docker image build and local website access.
- GitHub Actions workflow status.
- Live website accessibility through Vercel.

## 🎯 Project Objectives

- To develop a functional blog website using HTML, CSS, and JavaScript.
- To practise collaborative software development using Git and GitHub.
- To containerize a static website using Docker.
- To automate build checks using GitHub Actions.
- To deploy a website and make it accessible online.

## 🔮 Future Improvements

- Add more articles and categories.
- Display complete article content.
- Add article pagination.
- Improve accessibility and mobile navigation.
- Introduce a backend and database for managing articles.
- Add automated browser-based tests.

---

**Daily Reads — Ideas that inspire. Stories that matter.**