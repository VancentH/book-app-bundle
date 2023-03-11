FROM node:alpine as builder

# -p, -path: 指定的路徑建立目錄
RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod

# Stage2
FROM nginx:alpine

# 將設定檔進行覆蓋
COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf

# 複製 Stage1(builder) 的目錄至指定位置
COPY --from=builder /app/dist/book-app /usr/share/nginx/html
