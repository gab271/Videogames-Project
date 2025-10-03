# GameVault — Your Videogames Library

Project type: Full-stack (Ionic / Angular frontend + Node/Express + Sequelize + MySQL backend)

## Description
GameVault is a simple videogames catalog app. The backend exposes a REST API to manage videogame records and the frontend (Ionic + Angular) consumes that API to list, add, edit and delete videogames.

## Tech Stack
- Backend: Node.js, Express, Sequelize, MySQL  
  See [backend/index.js](backend/index.js) and [backend/models/videogames.model.js](backend/models/videogames.model.js).
- Frontend: Ionic + Angular  
  See [frontend/src/app/videogames/videogames.page.ts](frontend/src/app/videogames/videogames.page.ts) and [`VideogamesService`](frontend/src/app/services/videogames.service.ts).

## Getting started

### Backend
1. Go to backend folder:
```sh
cd backend
```
2. Install dependencies:
```sh
npm install
```
3. Configure DB in [backend/config/db.config.js](backend/config/db.config.js):
- DB name: `videogames`
- Default host: `localhost`
- Default port: backend listens on `8080` (see [backend/index.js](backend/index.js))

4. Start backend:
```sh
node index.js
```

API base: `http://localhost:8080/api/videogames`  
Endpoints:
- GET /api/videogames — list all (`exports.findAll` in [backend/controllers/videogame.controller.js](backend/controllers/videogame.controller.js))
- GET /api/videogames/:id — get one
- POST /api/videogames — create
- PUT /api/videogames/:id — update
- DELETE /api/videogames/:id — delete

### Frontend
1. Go to frontend folder:
```sh
cd frontend
```
2. Install and run:
```sh
npm install
npm start
or
ionic serve
```
App URL: `http://localhost:8100` (routes: see [frontend/src/app/app-routing.module.ts](frontend/src/app/app-routing.module.ts))

## Database
Create the database before running:
```sql
CREATE DATABASE videogames;
```
Credentials are in [backend/config/db.config.js](backend/config/db.config.js) (default in this repo: user `root`, password `1234`). Adjust to your environment.