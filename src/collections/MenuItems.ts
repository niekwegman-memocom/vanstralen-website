import { CollectionConfig } from 'payload'

export const MenuItems: CollectionConfig = {
  slug: 'menu-items',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Voorgerechten', value: 'starters' },
        { label: 'Hoofdgerechten', value: 'mains' },
        { label: 'Nagerechten', value: 'desserts' },
        { label: 'Dranken', value: 'drinks' },
        { label: 'Lunch', value: 'lunch' },
        { label: 'Brunch', value: 'brunch' },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'available',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
