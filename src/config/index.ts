import { devConfig } from "./development.config";
import { stagingConfig } from "./staging.config";

const env = "development";

interface Config {
    API: {
        BASE_URL: string;
    };
}

const config: Record<string, Config> = {
    development: devConfig,
    staging: stagingConfig,
};

export default config[env];
