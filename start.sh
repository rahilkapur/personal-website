#!/bin/sh
cd frontend
npm install
npm run build

cd ../backend
npm start &