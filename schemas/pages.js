export default {
    name: 'page',
    title:'Pagina',
    type: 'document',
    fields: [
        {
            name: 'pagina',
            title: 'Nombre de la pagina',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'pagina',
                maxLenght: 100,
            }
        },
        {
            name: 'description',
            title: 'Descripción de la pagina para el SEO',
            type: 'string'
        },
        {
            name: 'keywords',
            title: 'Palabras clave de la pagina',
            type: 'string'
        },
        {
            name: 'propiedades',
            title: 'Propiedades',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'propiedades'
                        }
                    ]
                }
            ]
        }
    ]
}