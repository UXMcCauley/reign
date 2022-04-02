
const products = [
    {
        id: 1,
        name: 'Executive Summary',
        href: '/dashboards/executive-summary',
        price: '$48',
        imageSrc: '/img/localhost-3000-dashboards-executive-summary.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Employee Performance',
        href: '/dashboards/employee-performance',
        price: '$35',
        imageSrc: '/img/localhost-3000-dashboards-executive-summary.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Workforce Diversity',
        href: '/dashboards/workforce-diversity',
        price: '$89',
        imageSrc: '/img/localhost-3000-dashboards-executive-summary.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Salary Overview',
        href: '/dashboards/salary-overview',
        price: '$35',
        imageSrc: '/img/localhost-3000-dashboards-executive-summary.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Project Dynamics',
        href: '/dashboards/project-dynamics',
        price: '$35',
        imageSrc: '/img/localhost-3000-dashboards-executive-summary.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function TailWindPreviewCards() {
    return (
        <div className="bg-white dark:bg-transparent">
            <div className="max-w-2xl mx-auto py-5 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Dashboards</h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 dark:bg-gray-800 dark:border-2 dark:border-gray-800">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700 dark:text-white">{product.name}</h3>
                            {/*<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>*/}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
