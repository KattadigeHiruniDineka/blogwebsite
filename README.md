
# Daily Reads — Blog Website

![Blog Website Docker CI](https://github.com/KattadigeHiruniDineka/blogwebsite/actions/workflows/docker-ci.yml/badge.svg)



## 1. Project Overview

Daily Reads is a simple, responsive blog website developed using HTML, CSS, and JavaScript. Users can browse article cards, search for articles, filter articles by category, and view article details.

## 2. Technologies Used

- HTML5
- CSS3
- JavaScript
- Docker
- Nginx
- Docker Compose
- GitHub Actions

## 3. Project Features

- Responsive blog homepage
- Article cards
- Article search functionality
- Category filtering
- Article details popup
- Docker-based deployment setup
- Automated Docker build checks using GitHub Actions

## 4. Run the Website Locally

1. Clone or download this repository.
2. Open the project folder in a terminal.
3. Run the following command:

```bash
docker compose up --build -d
```

4. Open the website in your browser:

http://localhost:8080

## 5. Stop the Website

Run:

```bash
docker compose down
```

## 6. GitHub Actions

The GitHub Actions workflow checks required project files and attempts to build the Docker image when code is pushed to the `main` branch or a pull request targets `main`.

Workflow file:

`.github/workflows/docker-ci.yml`

## 8. Project Status

The project uses Docker and Nginx to serve the static website. Automated build checks run through GitHub Actions after the workflow is pushed to GitHub.
