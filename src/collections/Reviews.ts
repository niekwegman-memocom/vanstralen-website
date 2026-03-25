import { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'customerName',
  },
  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
    },
    {
      name: 'review',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'approved',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
