# Projeto ORIGINA TOKEN

Este é um projeto Origina Token

## Inicialização do Projeto

Para iniciar o projeto, siga estas etapas:

1. Clone este repositório para o seu computador:

```bash
git clone https://github.com/ycr4zy/origina-token.git
cd origina-token
npm install
# ou
yarn install
npm run dev
# ou
yarn dev
```

## Execução Local ou Remoto

Now you need put ORIGINA TOKEN project running remotely using https://origina.gneves.dev to work with a plugin nomo manifest.
or with local connection with http://127.0.0.1:3000

```bash
## MacOS Cloudflared Tunneling
brew install cloudflare/cloudflare/cloudflared &&
sudo cloudflared service install eyJhIjoiNDhhZDdlNTdhOGQ0M2MzMzI3NjNkMWQxMDU2YjM4NmIiLCJ0IjoiMjc5ZmNiODYtN2M1NC00YzFjLThkNjUtZmEwYzdkNDY2OGNiIiwicyI6IlkyUTNOamhpT0RjdE1XVXhZUzAwWXpkbUxXRTVZV1l0TVdRMFpEZG1aakV4TW1KaCJ9

## Red Hat Cloudflared Tunneling
curl -L --output cloudflared.rpm https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-x86_64.rpm &&

sudo yum localinstall -y cloudflared.rpm &&

sudo cloudflared service install eyJhIjoiNDhhZDdlNTdhOGQ0M2MzMzI3NjNkMWQxMDU2YjM4NmIiLCJ0IjoiMjc5ZmNiODYtN2M1NC00YzFjLThkNjUtZmEwYzdkNDY2OGNiIiwicyI6IlkyUTNOamhpT0RjdE1XVXhZUzAwWXpkbUxXRTVZV1l0TVdRMFpEZG1aakV4TW1KaCJ9

## Windows Cloudflared Tunneling
Download https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi.

Run the installer.

Open Command Prompt as Administrator.

Run the following command:

cloudflared.exe service install eyJhIjoiNDhhZDdlNTdhOGQ0M2MzMzI3NjNkMWQxMDU2YjM4NmIiLCJ0IjoiMjc5ZmNiODYtN2M1NC00YzFjLThkNjUtZmEwYzdkNDY2OGNiIiwicyI6IlkyUTNOamhpT0RjdE1XVXhZUzAwWXpkbUxXRTVZV1l0TVdRMFpEZG1aakV4TW1KaCJ9

## Debian Cloudflared Tunneling
curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb &&

sudo dpkg -i cloudflared.deb &&

sudo cloudflared service install eyJhIjoiNDhhZDdlNTdhOGQ0M2MzMzI3NjNkMWQxMDU2YjM4NmIiLCJ0IjoiMjc5ZmNiODYtN2M1NC00YzFjLThkNjUtZmEwYzdkNDY2OGNiIiwicyI6IlkyUTNOamhpT0RjdE1XVXhZUzAwWXpkbUxXRTVZV1l0TVdRMFpEZG1aakV4TW1KaCJ9
```
