// export default {
//     name: 'blogPost',
//     title: 'Blog Post',
//     type: 'document',
//     fields: [
//       {
//         name: 'title',
//         title: 'Title',
//         type: 'string',
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//         options: { source: 'title' },
//         validation: Rule => Rule.required()
//       },
//       {
//         name: 'author',
//         title: 'Author',
//         type: 'string',
//         initialValue: 'The Toronto Sauna Co.'
//       },
//       {
//         name: 'featuredImage',
//         title: 'Featured Image',
//         type: 'image',
//         options: { hotspot: true }
//       },
//       {
//         name: 'content',
//         title: 'Content',
//         type: 'array',
//         of: [
//           { type: 'block' },
//           { 
//             type: 'image',
//             fields: [
//               {
//                 name: 'alt',
//                 title: 'Alt Text',
//                 type: 'string'
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }

export default {

name: 'blogPost',
title: 'Blog Post',
type: 'document',
fields: [
  {
    name: 'title',
    title: 'Title of Blog Post',
    type: 'string',
  },
  {
    name: 'slug',
    title: 'Slug or  Blog Post',
    type: 'slug',
    options: { source: 'title' },
  },
  {
    name: 'titleimage',
    title: 'Image or  Blog Post',
    type: 'image',
  },
  {
    name: 'description',
    title: 'Description  Blog Post',
    type: 'text',
  },
  {
    name: 'content',
    title: 'Blog Post Content',
    type: 'array',
    of: [
      { type: 'block' },
      {
        type: 'image',
        fields: [
          {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
          },
        ],
      },
    ]
  }
]

}
