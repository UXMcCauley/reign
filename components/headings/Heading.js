export default function Heading({label}) {
    return (
            <div className="pb-1 mb-4 mt-10 border-b border-gray-200 flex dark:border-gray-800">
                <h3 className="text-lg leading-6 font-medium text-gray-900 place-self-end dark:text-white">{label}</h3>
            </div>
    )
}
