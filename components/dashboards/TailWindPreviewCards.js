import Image from "next/image";
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
]

export default function TailWindPreviewCards() {
    return (
        <div className="bg-white dark:bg-transparent">
            <div className="max-w-2xl mx-auto py-5 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-center">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full bg-gray-200 rounded-lg overflow-hidden dark:bg-gray-800 dark:border-2 dark:border-gray-800">
                                <Image
                                    width={260}
                                    height={200}
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700 dark:text-white">{product.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
