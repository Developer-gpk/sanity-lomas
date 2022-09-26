export default {
    name: 'ubicaciones',
    title: 'Ubicaciones',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Ubicaciones de la propiedad',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nombre',
                maxLenght: 100,
            }
        }
    ]
}