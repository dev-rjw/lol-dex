const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
      <nav className="container mx-auto flex justify-around">
        <a href="/">홈</a>
        <a href="/champions">챔피언 목록</a>
        <a href="/items">아이템 목록</a>
        <a href="/rotation">챔피언 로테이션</a>
      </nav>
    </header>
  );
};

export default Header;
