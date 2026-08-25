import PictureOfMe from "../assets/PictureOfMe.jpg";
export default function Info() {
  return (
    <header className="card-header">
      <img className="profile-pic" src={PictureOfMe}></img>
      <div className="container">
        <div className="title">
          <h1>Gug Flaviu</h1>
          <h3>Front End Developer & Game Developer</h3>
          <a
            href="https://gugflaviu.webflow.io/"
            target="_blank"
            className="link"
          >
            <p>gugflaviu.com</p>
          </a>
        </div>

        <a href="mailto:gugflaviu@email.com" className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span>Email</span>
        </a>
      </div>
    </header>
  );
}
