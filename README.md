# Monorepo: Express + React

A monorepo setup using **Express.js** for the backend and **React** with **Vite** for the frontend. This project demonstrates a simple full-stack application with a focus on best practices, modularity, and modern JavaScript tooling.

## Description

This project is structured as a **monorepo**, containing two main packages:
1. **Backend (`/packages/api`)**: A REST API built with **Express.js** to handle requests.
2. **Frontend (`/packages/ui`)**: A React-based client application using **Vite** for fast development and build times.

The API fetches data from an external service, processes it, and makes it available for the frontend, which displays the data in a clean, user-friendly manner.

## Requirements

- **Node.js**: v18 or higher
- **pnpm**: Latest stable version recommended

## API Routes

### Health Check
- `GET /health`
  - Returns server health status

### File Operations
- `GET /files/data`
  - Returns data of files
  - Query Parameters:
    - `fileName` (optional): Specific file name (e.g., file.csv)
    - If no fileName is provided, returns data for all files

- `GET /files/list`
  - Returns a list of all available file names

## Author
- **Name**: Germán Aliprandi
- **Website**: [https://galiprandi.github.io/me/ext/](https://galiprandi.github.io/me/ext/)

## License
This project is licensed under the **MIT License**.

## Installation

To get started with this project, follow these steps.

1. **Clone the repository:**

   ```bash
   git clone git@github.com:galiprandi/monorepo-express-react.git
   cd monorepo-express-react
   ```

2. **Install dependencies:**

   Since this is a monorepo, you need to install dependencies for all workspaces:

   ```bash
   pnpm install
   ```

## Development

To start both the frontend and backend in development mode:

1. **Start the development servers:**

   ```bash
   pnpm dev
   ```

   This will:
   - Start the **API** on `http://localhost:3000`.
   - Start the **Frontend** on `http://localhost:8000`.

   Both services will run concurrently in development mode with **hot reloading** enabled.

## Available Scripts

### `pnpm dev`

Runs the frontend and backend development servers simultaneously.

### `pnpm start`

Starts both the backend and frontend in **production mode**. You need to build the frontend first with `pnpm build`.

### `pnpm build`

Builds the frontend application using Vite.

### `pnpm lint`

Runs **StandardJS** to lint the entire project.

### `pnpm prepare`

Installs **Husky** hooks. You should run this after cloning the repository or when updating Husky.

## Dependencies

- **Express.js**: Backend framework for building RESTful APIs.
- **React**: Frontend framework for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **Lint-Staged**: Run linters on pre-committed files.
- **StandardJS**: JavaScript style guide, linter, and formatter.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.