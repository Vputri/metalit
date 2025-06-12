# Nuxt.js Boilerplate

This project provides a robust and opinionated boilerplate for building Nuxt.js 3 applications with a focus on developer experience, code quality, and maintainability. It comes pre-configured with essential tools and practices to help you kickstart your next project.

---

## Table of Contents

- [Features](#features)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Development](#development)  
  - [Building for Production](#building-for-production)  
  - [Preview Production Build](#preview-production-build)  
- [Linting and Formatting](#linting-and-formatting)  
- [Testing](#testing)  
  - [Unit Tests](#unit-tests)  
  - [End-to-End (E2E) Tests](#end-to-end-e2e-tests)  
- [Docker](#docker)  
  - [Build the Docker Image](#build-the-docker-image)  
  - [Run the Docker Container](#run-the-docker-container)  
- [Project Structure](#project-structure)  
- [Customization](#customization)  
- [Contributing](#contributing)  

---

## Features

- **Nuxt 3**: The latest version of the intuitive Vue.js framework.  
- **TypeScript**: Type safety across your entire application for fewer bugs and better tooling.  
- **ESLint**: Enforces consistent code style and catches common errors.  
- **Prettier**: Automates code formatting to ensure a consistent codebase.  
- **Husky & Lint-Staged**: Git hooks to automatically lint and format staged files before committing, ensuring code quality.  
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.  
- **Mantine**: A comprehensive React components library integrated for styling consistency (via its CSS variables and global styles, direct component usage in Vue may require wrappers or custom components).  
- **Docker**: Containerization for consistent development, testing, and production environments.  
- **Unit Testing (Vitest)**: Fast and modern unit testing framework for Vue components and utility functions.  
- **End-to-End Testing (Cypress)**: Robust E2E testing for simulating user interactions and ensuring critical flows work as expected.  

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher recommended)  
- npm (Node Package Manager)  
- Docker (if you plan to use Docker for development/deployment)  

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-name>
