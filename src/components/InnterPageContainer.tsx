function InnerPageContainer({ title, children }: any) {
    return (
        <div className="flex justify-center lg:max-w-6xl mx-auto container  pb-10 pt-10">

            <div className="content-center w-full mx-auto container">
                <div className="w-full px-5 md:px-10 md:py-10 bg-base-100  rounded-md ">
                    {title ?
                        <div className="py-5 md:pb-10  w-full">
                            <h1 className="text-2xl md:text-4xl   font-medium text-[#00203D]    block text-center ">{title}</h1>
                        </div>
                        : false}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InnerPageContainer