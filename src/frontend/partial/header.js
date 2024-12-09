import Menu from "./menu";
function Header()
{
    return (
        <header class="header header-horizontal header-view-pannel">
        <div class="container">
          <nav class="navbar">
            <a class="navbar-brand" href="./">
              <span class="logo-element">
                <span class="logo-tape">
                  <span class="svg-content svg-fill-theme" data-svg="./images/svg/logo-part.svg"></span>
                </span>
                <span class="logo-text text-uppercase">
                  Xù cinema

                </span>
              </span>
            </a>
            <button class="navbar-toggler" type="button">
              <span class="th-dots-active-close th-dots th-bars">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <Menu/>
          </nav>
        </div>
      </header>
    );
}
export default Header;