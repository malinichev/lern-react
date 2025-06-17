#!/bin/bash

DEPLOY_HOST="${1}"

# Загружаем nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Устанавливаем нужную версию Node
nvm use 18.20.8 || exit 1

# Теперь yarn и node будут доступны через PATH
yarn install --frozen-lockfile
yarn build:prod --env mode=production apiUrl="http://${DEPLOY_HOST}:8000"

# pm2
pm2 startOrRestart ecosystem.config.js --env production && pm2 save

rm -rf /var/www/production_project/html
mv build /var/www/production_project/html/