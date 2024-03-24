# ベースイメージを指定
FROM node:20.11

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# # アプリケーションのポートを公開
# EXPOSE 3000

# # アプリケーションを実行
# CMD [ "npm", "start" ]