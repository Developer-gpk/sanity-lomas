export default {
    name: 'credits',
    title: 'Creditos',
    type: 'document',
    __experimental_actions: [
        /*'create',*/ 'update', /*'delete',*/ 'publish'
    ],
    fields: [
        {
            name: 'descripcion',
            title: 'Descripcion del SEO de creditos',
            type: 'string'
        },
        {
            name: 'keywords',
            title: 'Palabras clave',
            type: 'string'
        },
        {
            name: 'titulo1',
            title: 'Titulo paso 1',
            type: 'string'
        },
        {
            name: 'texto1',
            title: 'Texto paso 1',
            type: 'string'
        },
        {
            name: 'imagen1',
            title: 'Imagen paso 1',
            type: 'image'
        },
        {
            name: 'titulo2',
            title: 'Titulo paso 2',
            type: 'string'
        },
        {
            name: 'texto2',
            title: 'Texto paso 2',
            type: 'string'
        },
        {
            name: 'imagen2',
            title: 'Imagen paso 2',
            type: 'image'
        },
        {
            name: 'titulo3',
            title: 'Titulo paso 3',
            type: 'string'
        },
        {
            name: 'texto3',
            title: 'Texto paso 3',
            type: 'string'
        },
        {
            name: 'imagen3',
            title: 'Imagen paso 3',
            type: 'image'
        }
    ]
}