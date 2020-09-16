FROM node:14-alpine

# create destination directory
WORKDIR /usr/src/app

# set app serving to permissive / assigned and app port
ENV HOST 0.0.0.0
ENV PORT 3000

# copy the app, note .dockerignore
COPY package*.json ./
RUN npm install

# copy the app, note .dockerignore
COPY . .

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# start the app
CMD npm start