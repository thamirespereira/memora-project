export default function RightSidebar(){

    return(
        <><div className='fixed right-0 bg-scroll flex-col bg-sidebar h-screen w-72 top-0 bottom-0 place-items-center'>
            <div className="bg-branco py-4 rounded-xl mt-6 mx-2 mb-2 placeholder:pesquisar"></div>
            <div className="text-left text-4xl">
             <div className="text-black bg-gradient-to-r from-pink-1 to-pink-2  font-medium text-sm rounded-t-xl py-2 mt-4 mx-2">
                <h6 className="pl-2">em alta</h6>
                </div>
                <div className="bg-branco py-11 rounded-xl mx-2 rounded-t-none rounded-b-xl">
                </div>
                
                <div className="text-black bg-gradient-to-r from-pink-1 to-pink-2  font-medium text-sm rounded-t-xl py-2 mt-4 mx-2">
                <h6 className="pl-2">recente em grupos</h6>
                </div>
                <div className="bg-branco py-11 rounded-xl mx-2 rounded-t-none rounded-b-xl">
                </div>

                <div className="text-black bg-gradient-to-r from-pink-1 to-pink-2  font-medium text-sm rounded-t-xl py-2 mt-4 mx-2">
                <h6 className="pl-2">amigos</h6>
                </div>
                <div className="bg-branco py-11 rounded-xl mx-2 rounded-t-none rounded-b-xl">
                </div>

                <div className="text-black bg-gradient-to-r from-pink-1 to-pink-2  font-medium text-sm rounded-t-xl py-2 mt-4 mx-2">
                <h6 className="pl-2">grupos</h6>
                </div>
                <div className="bg-branco py-11 rounded-xl mx-2 rounded-t-none rounded-b-xl">
                </div>
            </div>
            </div></>
    )
}

