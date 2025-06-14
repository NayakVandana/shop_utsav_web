//C:\wamp64\www\shop_utsav_frontend\src\components\Layouts\FoamContainer.tsx

function FoamContainer({ title, subtitle, children, rightTsx }: any) {
    return (<>
        <div className="p-6">
            <div className={`content-center w-full mx-auto lg:w-2/3 xl:1/3 lg:p-10 rounded-md`}>
                <div className="flex  flex-row mb-2 flex-wrap justify-between">
                    <div className=" my-1  mb-2">
                        {title ? <h1 className="text-secondary-900   text-2xl md:px-0  text-left block  font-medium">{title}</h1> : false}
                        {subtitle ? <p className="text-secondary-500   text-sm">{subtitle}</p> : false}
                    </div>
                    {rightTsx ? rightTsx : false}
                </div>
                <div className="w-full bg-base-100  p-10 rounded-md  ">
                    <div className="space-y-3  ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default FoamContainer