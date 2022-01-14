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
      <div className="question-india">? India</div>
      <div className="footer-links">
        <div className="left-footer-links">
          <div className="separated-links">About</div>
          <div className="separated-links">How Qyun works</div>
        </div>
        <div className="right-footer-links">
          <div className="separated-links">Privacy</div>
          <div className="separated-links">Terms</div>
          <div className="separated-links">Settings</div>
        </div>
      </div>
    </div>
  );
}
