import {defineField, defineType} from 'sanity'

export const landing = defineType({
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'image',
      options: {
        accept: 'iamge/jpeg'
      }
    }),
  ],
})