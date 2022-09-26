export default {
    name: 'category',
    title: 'Categoria',
    type: 'document',
    fields: [
        {
            name: 'category',
            title: 'Nombre de la categoria',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'category',
                maxLenght: 100,
            }
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Descripcion',
            type: 'array',
            of: [{type: 'block'}]
        }
    ],
    preview: {
        select: {
            title: 'category',
            image: 'coverImage',
            slug: 'slug'
        },
        preparare({ title, image, slug }){
            return{
                title,
                media: image,
                subTitle: slug.current
            }
        }
    }
}