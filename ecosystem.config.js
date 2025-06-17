const dotenv = require('dotenv');

dotenv.config({ path: '.env.deploy' });

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_REPOSITORY, DEPLOY_PATH, DEPLOY_REF } =
    process.env;

module.exports = {
    apps: [
        {
            name: 'lern-react',
            script: './json-server/index.js',
        },
    ],
    // Настройка деплоя
    deploy: {
        production: {
            user: DEPLOY_USER,
            host: DEPLOY_HOST,
            ref: DEPLOY_REF,
            repo: DEPLOY_REPOSITORY,
            path: DEPLOY_PATH,
            'pre-deploy-local': `bash scripts/deployEnv.sh ${DEPLOY_USER}@${DEPLOY_HOST} ${DEPLOY_PATH}`,
            // eslint-disable-next-line max-len
            'post-deploy': `pwd && yarn install --frozen-lockfile && yarn build:prod --env mode=production apiUrl="http://${DEPLOY_HOST}:8000" &&  pm2 startOrRestart ecosystem.config.js --env production && rm -rf ~/../var/www/production_project/html && mv ~/../home/lern-react/build ~/../var/www/production_project/html`,
        },
    },
};
