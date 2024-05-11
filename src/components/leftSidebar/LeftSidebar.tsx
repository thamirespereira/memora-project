export default function LeftSidebar(){

    return(
        <><div className='fixed flex flex-col bg-scroll bg-sidebar h-screen w-64 left-10px top-0 bottom-0 place-items-center'>
            <div className="text-left text-4xl">
                <h2 className="text-pink-2 font-semibold py-6 px-14 ">Memora</h2>

                <ul className="flex flex-col gap-2 w-full">

                    <li className="font-sans text-sm text-branco font-medium py-1 px-14  hover:bg-gradient-to-r from-purple to-pink-1 flex">
                    <svg className="mr-2 h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />  
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg> 
                        início
                    </li>

                    <li className="font-sans text-sm text-branco font-medium py-1 px-14 hover:bg-gradient-to-r from-purple to-pink-1 flex">
                    <svg className="mr-2 h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />  
                    <circle cx="12" cy="12" r="9" />
                    </svg>
                        explore
                    </li>

                    <li className="font-sans text-sm text-branco font-medium py-1 px-14  hover:bg-gradient-to-r from-purple to-pink-1 flex">
                    <svg className="mr-2 h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
                    <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />  
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                        amigos
                    </li>

                    <li className="font-sans text-sm text-branco font-medium py-1 px-14  hover:bg-gradient-to-r from-purple to-pink-1 flex">
                    <svg className="mr-2 h-5 w-5 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                        grupos
                    </li>

                    <li className="font-sans text-sm text-branco font-medium py-1 px-14  hover:bg-gradient-to-r from-purple to-pink-1 flex">
                    <svg className="mr-2 h-5 w-5 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                        perfil
                    </li>

                    <li className="font-sans text-sm text-branco font-medium py-1 px-14  hover:bg-gradient-to-r from-purple to-pink-1 flex">
                    <svg className="mr-2 h-5 w-5 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                        notificações
                    </li>

                    <li className="font-sans text-sm text-branco font-medium py-1 px-14 mb-4 hover:bg-gradient-to-r from-purple to-pink-1 flex">
                    <svg className="mr-2 h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  
                    <circle cx="12" cy="12" r="3" />
                    </svg>
                        opções
                    </li>
                </ul>

                <button className="font-sans font-medium text-sm text-branco bg-gradient-to-r from-pink-1 to-pink-2 px-12 pr-16 py-2 mx-2 rounded-lg items-center flex">
                <svg className="mr-2 h-5 w-5 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
                    Criar memória
                </button>

                <div className="text-branco font-light text-sm flex flex-wrap pt-32">
                    <h6 className="px-4">About</h6>
                    <h6 className="px-1">Apps</h6> 
                    <h6 className="px-4">Privacidade</h6>
                    <h6 className="pl-12">Cookies</h6>
                    <h6 className="px-4">Ajuda</h6>
                    </div>
            </div>
            
        </div>
        </>
    )
}