from node:alpine
workdir /usr/app
copy package*.json ./
run npm install
copy . .

expose 3000

cmd ["npm", "start"]