export default function Home() {
  return (
    <div className="py-[100px]">
      <main className="container mx-auto mt-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500">리그 오브 레전드 정보 앱</h1>
          <p className="mt-4 text-gray-500">Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
        </div>
        <div className="mt-[40px] flex flex-col justify-center gap-10">
          <div className="flex flex-col justify-center gap-10">
            <a className="flex flex-col justify-center items-center gap-5 text-amber-400" href="/champions">
              <div className="relative w-[400px] h-[300px]">
                <img className="absolute h-full w-full object-cover" alt="Picture of the author" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" src="https://lol-dex-8kxr.vercel.app/_next/image?url=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffeatured%2Fleague-of-legends-3ggpjbfly8o9uo8a.jpg&w=1920&q=75"></img>
              </div>
              챔피언 목록 보기
            </a>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <a className="flex flex-col justify-center items-center gap-5 text-amber-400" href="/rotation">
              <div className="relative w-[400px] h-[300px]">
                <img className="absolute h-full w-full object-cover" alt="Picture of the author" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" src="https://lol-dex-8kxr.vercel.app/_next/image?url=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhigh%2F3d-league-of-legends-8yx3ab1xb69nn227.webp&w=1920&q=75"></img>
              </div>
              금주 로테이션 확인
            </a>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <a className="flex flex-col justify-center items-center gap-5 text-amber-400" href="/items">
              <div className="relative w-[400px] h-[300px]">
                <img className="absolute h-full w-full object-cover" alt="Picture of the author" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" src="https://lol-dex-8kxr.vercel.app/_next/image?url=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhigh%2Farcane-league-of-legends-dark-alley-z81hrap8o7mezc0g.webp&w=1920&q=75"></img>
              </div>
              아이템 목록 보기
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
