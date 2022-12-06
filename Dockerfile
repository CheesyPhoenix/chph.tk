FROM node:18 as builder

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY ./ ./

RUN npm run build


FROM node:18-alpine

WORKDIR /build

COPY --from=builder /src/dist /build/
COPY --from=builder /src/package.json /build/

CMD ["node", "index.js"]