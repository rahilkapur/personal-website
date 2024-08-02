#!/bin/sh
cd backend
npm start &

cd ../frontend
npm install
npm start
