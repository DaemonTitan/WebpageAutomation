import * as dotenv from 'dotenv';
import path from 'path';

// MARK: Define envs and keys
type EnvType = 'DEV' | 'UAT' | 'PROD';
type EnvKey = 'BASE_URL';

const env = (process.env.TEST_ENV || 'UAT').toUpperCase() as EnvType;

dotenv.config({
    path: path.resolve(process.cwd(), `env/.env.${env}`),
    quiet: true
});

// MARK: 
function getEnvVariable(key: EnvKey | string): string {
    const value = process.env[key];

    if(!value) {
        throw new Error(`Missing environment variable: ${key}`);
    };

    return value;
}

export const ENV = {
    baseURL: getEnvVariable('BASE_URL')
};