import Image from "next/image";

export default function Header() {
      return (
    <header>
      <nav className="navbar-fixed-top">
        <div id="main-navbar">
            <div className="center-nav">
                <a href="/">
                    <Image src="/favicon.ico" alt="Logo" width={50} height={50} />
                </a>
            </div>
            <div className="left-nav">
                <ul className="nav navbar-nav">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Our Business</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Sustainability</a></li>
                    <li><a href="/">SDP Capital</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="navsearch">
                    <button>
                        <SearchIcon/>
                    </button>
                </div>
            </div>
        </div>
      </nav>
    </header>
  );
}