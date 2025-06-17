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
            'post-deploy': `chmod +x .deploy/deploy.sh && .deploy/deploy.sh ${DEPLOY_HOST}`,
        },
    },
};
