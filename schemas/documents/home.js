export default {
    name: 'home',
    title: 'Inicio',
    type: 'document',
    __experimental_actions: [
        /*'create',*/ 'update', /*'delete',*/ 'publish'
    ],
    fields: [
        {
            name: 'descripcion',
            title: 'Descripción del SEO',
            type: 'string',
            of: [{type: 'block'}]
        },
        {
            name: 'keywords',
            title: 'Palabras clave',
            type: 'string'
        },
        {
            name: 'imagenes_desk',
            title: 'Imagenes del carousel principal de escritorio',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'imagenes_mobile',
            title: 'Imagenes del carousel principal de movil',
            type: 'array',
            of: [{type: 'image'}]
        },
        {
            name: 'texto1',
            title: 'Quienes somos texto',
            type: 'string'
        },
        {
            name: 'texto2',
            title: 'Quienes somos texto resaltado',
            type: 'string'
        }
    ]
}