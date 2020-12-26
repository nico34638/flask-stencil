FROM node:14.10.0-alpine as build
#FROM node:12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN apk add --no-cache bash

RUN npm -g config set user root
#RUN npm install -g @bigcommerce/stencil-cli  --silent
RUN npm install @stencil/core@latest --save-exact --silent
RUN npm install --silent


#RUN npm install react-scripts@3.0.1 -g --silent
#RUN npm install -g @bigcommerce/stencil-cli

RUN echo $(ls)
RUN echo $(ls /app)
COPY . /app
RUN echo $(ls /app)
RUN echo $(pwd)
RUN echo $(ls)

#RUN cd /app

#RUN npm run-scripts build

CMD ["npm","run" ,"start"]

# production environment
#FROM nginx:1.16.0-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]