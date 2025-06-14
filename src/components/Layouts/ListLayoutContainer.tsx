//C:\wamp64\www\shop_utsav_frontend\src\components\Layouts\ListLayoutContainer.tsx


function ListLayoutContainer({ title, subtitle, children, rightTsx, isBackBtn }: any) {
    return (
        <>
            <div className="p-4 sm:p-6">
                {/* Header Section with improved mobile responsiveness */}
                <div className={`
                    flex flex-col gap-4 mb-4 sm:mb-6
                    ${isBackBtn ? "flex-col-reverse" : "flex-col"} 
                    md:flex-row md:items-start md:justify-between md:gap-6
                `}>
                    
                    {/* Title and Subtitle Section */}
                    <div className="flex-1 min-w-0">
                        {title && (
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 break-words">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="text-secondary-500 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    
                    {/* Right Action Section */}
                    {rightTsx && (
                        <div className="flex-shrink-0 w-full md:w-auto">
                            <div className="flex justify-start md:justify-end">
                                {rightTsx}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Content Section */}
                <div className={`
                    w-full 
                    ${title === "Search Result" ? 'overflow-x-auto' : ''} 
                `}>
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListLayoutContainer
