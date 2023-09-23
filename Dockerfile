FROM alpine:latest as builder

WORKDIR /usr/apps/api

RUN apk --no-cache update && apk add wget curl ca-certificates \
  && apk add bash \
  && apk add nodejs && apk add npm

COPY . .

RUN npm ci

RUN npm run build

FROM alpine:latest as production

ENV PORT = 7000

WORKDIR /usr/apps/api

RUN apk --no-cache update && apk add wget curl ca-certificates \
  && apk add bash \
  && apk add nodejs && apk add npm

COPY --from=builder /usr/apps/api .

RUN npm install --omit=dev

CMD ["npm", "run", "start"]