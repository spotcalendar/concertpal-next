FROM oven/bun:1 AS deps

WORKDIR /app

# Copy only package files first
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies and generate Prisma client
RUN bun install
RUN bunx prisma generate

FROM oven/bun:1 AS builder

WORKDIR /app

# Copy necessary files
COPY . .
COPY --from=deps /app/node_modules ./node_modules
# Copy generated prisma to avoid regeneration
COPY --from=deps /app/node_modules/.prisma ./node_modules/.prisma

# Disable prisma postinstall script during build
ENV PRISMA_SKIP_POSTINSTALL=1

RUN bun run build

FROM oven/bun:1 AS runner

WORKDIR /app

ENV NODE_ENV production
# Disable prisma postinstall script in production
ENV PRISMA_SKIP_POSTINSTALL=1

# Copy necessary files from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
# Copy prisma schema and generated client
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
ENV PORT 3000

# Install concurrently globally
RUN bun install -g concurrently

CMD ["bun", "run", "start"]