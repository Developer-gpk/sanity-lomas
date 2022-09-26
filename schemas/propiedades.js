export default {
    name: 'propiedades',
    title: 'Propiedades',
    type: 'document',
    fields: [
        {
            name: 'imagesGallery',
            title: 'Imagenes de la propiedad',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'url',
            title: 'url de video',
            type: 'string'
        },
        {
            name: 'sku',
            title: 'SKU',
            type: 'string'
        },
        {
            name: 'categoria',
            title: 'Tipo de propiedad',
            type: 'reference',
            to: [{type: 'category'}]
        },
        {
            name: 'name',
            title: 'Nombre de la propiedad',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLenght: 100,
            }
        },
        {
            name: 'address',
            title: 'Direccion',
            type: 'string'
        },
        {
            name: 'ubicacion',
            title: 'Ubicacion de la propiedad',
            type: 'reference',
            to: [{type: 'ubicaciones'}]
        },
        {
            name: 'google_maps',
            title: 'Link Google Maps',
            type: 'string'
        },
        {
            name: 'availability',
            title: 'Venta / Renta',
            type: 'string',
            options: {
                list: [
                    { title: "Venta", value: "Venta" },
                    { title: "Renta", value: "Renta" },
                ]
            },
            defaultValue: 'Venta'
        },
        {
            name: 'size',
            title: 'Tamaño del terreno en m2',
            type: 'string'
        },
        {
            name: 'construction',
            title: 'Tamaño de de la construccion de la propiedad',
            type: 'string'
        },
        {
            name: 'bedrooms',
            title: 'Numero de habitaciones',
            type: 'string'
        },
        {
            name: 'bathroom',
            title: 'Numero de baños',
            type: 'string'
        },
        {
            name: 'bathroom2',
            title: 'Numero de 1/2 baños',
            type: 'string'
        },
        {
            name: 'service',
            title: '¿Cuenta con cuarto de servicio?',
            type: 'boolean'
        },
        {
            name: 'parking',
            title: '¿Cuenta con estacionamiento?',
            type: 'string'
        },
        {
            name: 'antiquity',
            title: 'Antigüedad',
            type: 'string'
        },
        {
            name: 'sale',
            title: 'Precio de venta',
            type: 'number'
        },
        {
            name: 'income',
            title: 'Precio de renta',
            type: 'number'
        },
        {
            name: 'currency',
            title: 'Divisa',
            type: 'string',
            options: {
                list: [
                    { title: "Pesos", value: "peso" },
                    { title: "Dólares", value: "dolar" },
                ]
            },
            defaultValue: 'Pesos'
        },
        {
            name: 'details',
            title: 'Detalles de la propiedad 1',
            type: 'string'
        },
        {
            name: 'details_2',
            title: 'Detalles de la propiedad 2',
            type: 'string'
        },
        {
            name: 'pool',
            title: '¿Cuenta con alberca?',
            type: 'boolean'
        },
        {
            name: 'arc',
            title: 'Arco de acceso',
            type: 'boolean'
        },
        {
            name: 'games',
            title: 'Juegos infantiles',
            type: 'boolean'
        },
        {
            name: 'grills',
            title: 'Zona de asadores',
            type: 'boolean'
        },
        {
            name: 'roof',
            title: 'Roof top',
            type: 'boolean'
        },
        {
            name: 'events',
            title: 'Salón de eventos',
            type: 'boolean'
        },
        {
            name: 'gym',
            title: 'GYM',
            type: 'boolean'
        },
        {
            name: 'elevator',
            title: 'Elevador',
            type: 'boolean'
        },
        {
            name: 'description',
            title: 'Descripcion',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
}