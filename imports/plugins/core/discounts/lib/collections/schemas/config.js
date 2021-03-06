import { registerSchema } from "@reactioncommerce/schemas";
import { PackageConfig } from "/lib/collections/schemas/registry";
import { Discounts } from "./discounts";

/**
 * @name DiscountsPackageConfig
 * @memberof Schemas
 * @type {SimpleSchema}
 */
export const DiscountsPackageConfig = PackageConfig.clone().extend({
  // Remove blackbox: true from settings obj
  "settings": {
    type: Object,
    optional: true,
    blackbox: false,
    defaultValue: {}
  },
  "settings.rates": {
    type: Object,
    optional: true,
    defaultValue: {}
  },
  "settings.rates.enabled": {
    type: Boolean,
    optional: true,
    defaultValue: false
  },
  "settings.rates.discounts": {
    type: Array,
    optional: true
  },
  "settings.rates.discounts.$": {
    type: Discounts
  }
});

registerSchema("DiscountsPackageConfig", DiscountsPackageConfig);
