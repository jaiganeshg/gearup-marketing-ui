export default function Footer() {
  return (
    <div>
      <div className="footer-logo">
        <img src="./bygearup.png" alt="logo" />
        {/* <p className="footer-heart">
  Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
          <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"/></g-emoji>
        </p> */}
      </div>
      <div className="footer-card">
        <div className="footer-tag1">? India</div>
        <div className="footer-tag2">
          <div>
            <a className="pl-0" href="">About</a>
            <a href="">How Qyun works</a>
          </div>
          <div>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a className="pr-0" href="">Settings</a>
          </div>
      </div>
      </div>
      
    </div>
  );
}
