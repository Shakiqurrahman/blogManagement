# Blog Management

### Overview

A robust platform for creating, editing, and managing blog posts efficiently. Designed to handle users, roles, and publishing workflows with ease.

---

### Features

1. Blog Management ( Add, update, delete blog details. )
2. User & Admin Management ( Role Based Management )
3. Authentication & Authorization
4. Data validation ( Robust schema validation with Zod and ensures type safety )
5. Code quality ( Enforced standards with ESLint and consistent code formatting with Prettier )

---

### Technology Used

- TypeScript - For static typing and advanced developer tooling.
- Node.js & Express.js - Backend server & routing.
- MongoDB - NoSQL database for storing application data
- Mongoose - ODM library for MongoDB.
- Zod - Schema declaration and validation library.
- ESLint - Ensures code quality to best practices.
- Prettier - Maintains consistent code formatting.

---

### Scripts

- npm run dev - Start the development server.
- npm run build - Build the application.
- npm run lint - Run ESLint to check for code issues.
- npm run lint:fix - Fixed to some errors automatically.

### Environment Variable

- PORT
- MONGODB_URI

### Getting Started

#### Prerequisites

Ensure you have the following installed:

- Node.js v20
- npm

#### Installation

1. Clone the repository:

```js
git clone https://github.com/Shakiqurrahman/blogManagement.git
cd repository-name
```

2. Install dependencies:

```js
npm install
```

3. Set up environment variables:

```js
PORT = 8080;
MONGODB_URI = your_mongodb_uri;
```

#### Usage

- Run the development server:

```js
npm run dev
```

- build for production:

```js
npm run build
```

- check the EsLint error:

```js
npm run lint
```

- fix the EsLint error:

```js
npm run lint:fix
```

### Thank You
