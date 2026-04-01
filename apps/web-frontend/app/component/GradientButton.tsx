
export const GradientButton = () => {
    return<div      className="flex">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <button className=" m-auto mt-2 relative px-7 py-4 bg-black rounded-lg leading-none  flex items-center divide-x divide-gray-600">
                    <span className=" flex item-center divide-gray-600 justify-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" h-6 w-6 -rotate-6 text-pink-600 size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                    <span className=" pl-4 pr-6 pt-1 text-gray-100">Releasing version 2.0</span>
                    </span>
                
                    <span className=" pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">See what's coming &rarr;</span>
                </button>
        </div>
    </div>
}