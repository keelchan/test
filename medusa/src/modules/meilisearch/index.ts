import { Module } from '@medusajs/framework/utils';
import Loader from './loader';
import { MeiliSearchService } from './service';

export default Module('meilisearchService', {
  service: MeiliSearchService,
  loaders: [Loader],
});
