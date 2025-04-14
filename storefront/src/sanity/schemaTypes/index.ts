import { SchemaPluginOptions } from 'sanity'
import productSchema from './documents/product'
import {landing} from './documents/landing'
import {eventType} from './documents/eventType'
import {artistType} from './documents/artistType'
import {venueType} from './documents/venueType'

export const schema: SchemaPluginOptions = {
  types: [productSchema, landing, eventType, artistType, venueType],
  templates: (templates) => templates.filter(
    (template) => template.schemaType !== "product"
  ),
}
