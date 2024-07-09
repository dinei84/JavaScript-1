export default function Widget() {
    return (
        
        
        <div className="bg-cover bg-center h-screen" style="background-image: url('https://placehold.co/1920x1080');">
          <div className="bg-black bg-opacity-50 h-full">
            <nav className="flex justify-between items-center p-6">
              <div className="flex items-center space-x-2">
                <img src="https://placehold.co/40x40" alt="bibotalk logo" className="h-10" />
                <span className="text-white text-2xl font-bold">bibotalk</span>
              </div>
              <ul className="flex space-x-8 text-white">
                <li><a href="#" className="hover:text-orange-500">HOME</a></li>
                <li><a href="#" className="hover:text-orange-500">PODCASTS</a></li>
                <li><a href="#" className="hover:text-orange-500">TEXTOS</a></li>
                <li><a href="#" className="hover:text-orange-500">VÍDEOS</a></li>
                <li><a href="#" className="hover:text-orange-500">ESCOLA BIBOTALK</a></li>
                <li><a href="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">AJUDE</a></li>
                <li>
                  <a href="#" className="hover:text-orange-500"><img src="https://placehold.co/24x24?text=🔍" alt="search icon" /></a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col items-center justify-center h-full text-center text-white">
              <div className="max-w-2xl">
                <p className="text-sm">5 DE JULHO DE 2024</p>
                <h1 className="text-4xl font-bold mt-2">ORAR EM VOZ ALTA É MAIS EFICAZ? – BTPAPO 055</h1>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <span className="text-orange-500">PODCAST</span>
                  <span className="text-orange-500">⏰ 00:47:16</span>
                  <a href="#" className="text-orange-500 flex items-center space-x-1">
                    <img src="https://placehold.co/16x16?text=⬇️" alt="download icon" />
                    <span>DOWNLOAD</span>
                  </a>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <button className="bg-white text-black rounded-full p-3">
                    <img src="https://placehold.co/24x24?text=▶️" alt="play icon" />
                  </button>
                  <span className="ml-4">00:00:00</span>
                  <div className="bg-zinc-700 h-1 w-64 mx-4">
                    <div className="bg-orange-500 h-1 w-1/4"></div>
                  </div>
                  <span className="mr-4">00:47:16</span>
                  <img src="https://placehold.co/24x24?text=🔊" alt="volume icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
    )
}