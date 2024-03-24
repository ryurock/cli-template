# vercel/pkg で codesign をしないように必要になる ldid をビルド
#
# > Warning Unable to sign the macOS executable
# Due to the mandatory code signing requirement, before the
# executable is distributed to end users, it must be signed.
# Otherwise, it will be immediately killed by kernel on launch.
# An ad-hoc signature is sufficient.
# To do that, run pkg on a Mac, or transfer the executable to a Mac
# and run "codesign --sign - <executable>", or (if you use Linux)
# install "ldid" utility to PATH and then run pkg again
FROM ubuntu:latest AS builder

RUN apt-get update \
  && apt-get install -y build-essential git libplist-dev libplist++-dev pkg-config libssl-dev libplist3 \
  && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/ProcursusTeam/ldid.git

WORKDIR /ldid

RUN make

FROM node:18.19.1

# libplist がないと ldid 実行時にエラーになる
RUN apt-get update \
  && apt-get install -y libplist3 \
  && rm -rf /var/lib/apt/lists/*

COPY --from=builder /ldid/ldid /usr/local/bin/

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
