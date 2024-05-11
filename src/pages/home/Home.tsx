
import profileImage from '/home/thamires/memora-project/src/assets/83bc8b88cf6bc4b4e04d153a418cde62.jpg';

function Home() {

    return(
        <>
            <div className='ml-28 pl-28'>
            <div className='flex-grow'>
            <div className="bg-[url(/home/thamires/memora-project/src/assets/e22f1485bb68385d42f060d3aea594c9.jpg)] py-10 width:100% top-0">
                <img src={profileImage} className="container w-48 h-48 relative z-10 pl-12 rounded-b-lg rounded-t-full top-16"/>
            </div>
            <div className='grow bg-cover bg-background mx-auto width:100% text-purple-700 place-items-start py-24'> </div>
            <div className='flex flex-grow bg-pink-1 h-10 w-100%'>
                <div className='text-branco font-semibold flex'>
                    <p className='py-2 pl-56 pr-24'>memórias</p>
                    <p className='py-2 pr-24'>marcadores</p>
                    <p className='py-2 pr-24'>interações</p>
                    <p className='py-2 pr-24'>recados</p>
                </div>
            </div>
            </div>
            </div>
          
        </>
    )
    
}

export default Home;