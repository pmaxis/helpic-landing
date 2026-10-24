# --- base ---------------------------------------------------------------
FROM node:22-alpine AS base
WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# --- dev (used by docker compose) -------------------------------------------
FROM base AS dev
COPY . .
EXPOSE 4321
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]

# --- build ----------------------------------------------------------------
FROM base AS build
# The pages are static: both addresses are written into them here.
ARG PUBLIC_SITE_URL=
ARG PUBLIC_APP_URL=
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL PUBLIC_APP_URL=$PUBLIC_APP_URL
COPY . .
RUN pnpm run build

# --- production (static files served by nginx) ----------------------------
FROM nginx:1.27-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-security.conf /etc/nginx/security.conf
EXPOSE 80
