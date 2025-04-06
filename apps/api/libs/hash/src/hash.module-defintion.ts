import { ConfigurableModuleBuilder } from "@nestjs/common";

export interface HashModuleOptions {
  SECRET_KEY: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<HashModuleOptions>({
    moduleName: "Hash",
  }).build();
