export default{
    name: 'conocenos',
    title: 'Conocenos',
    type: 'document',
    __experimental_actions: [
        /*'create',*/ 'update', /*'delete',*/ 'publish'
    ],
    fields: [
        {
            name: 'descripcion',
            title: 'Descripcion del SEO de conocenos',
            type: 'string'
        },
        {
            name: 'keywords',
            title: 'Palabras clave',
            type: 'string'
        },
        {
            name: 'fundados',
            title: 'Titulos de fundados',
            type: 'string'
        },
        {
            name: 'texto_fundados',
            title: 'Texto complementario del titlo',
            type: 'string'
        },
        {
            name: 'detalles1',
            title: 'Titulo de datalle 1',
            type: 'string'
        },
        {
            name: 'texto_datalle1',
            title: 'Texto complementario de datelle 1',
            type: 'string'
        },
        {
            name: 'imagen_detalle1',
            title: 'Imagen del detalle 1',
            type: 'image'
        },
        {
            name: 'detalles2',
            title: 'Titulo de datalle 2',
            type: 'string'
        },
        {
            name: 'texto_datalle2',
            title: 'Texto complementario de datelle 2',
            type: 'string'
        },
        {
            name: 'imagen_detalle2',
            title: 'Imagen del detalle 2',
            type: 'image'
        },
        {
            name: 'detalles3',
            title: 'Titulo de datalle 3',
            type: 'string'
        },
        {
            name: 'texto_datalle3',
            title: 'Texto complementario de datelle 3',
            type: 'string'
        },
        {
            name: 'imagen_detalle3',
            title: 'Imagen del detalle 3',
            type: 'image'
        },
        {
            name: 'detalles',
            title: 'Detalles de la propiedad',
            type: 'string'
        },
        {
            name: 'experiencia',
            title: 'Experiencia visual',
            type: 'string'
        },
        {
            name: 'planos',
            title: 'Planos arquitectónicos',
            type: 'string'
        },
        {
            name: 'levantamiento',
            title: 'Levantamiento de material',
            type: 'string'
        },
        {
            name: 'alcance',
            title: 'Alcance y publicidad',
            type: 'string'
        },
        {
            name: 'asesoria',
            title: 'Asesoría integral',
            type: 'string'
        },
    ]
}