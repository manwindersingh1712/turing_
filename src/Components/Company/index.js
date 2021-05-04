import "./index.css";

export default function Company({ name, logo }) {
  return (
    <div className="center">
      <div className="company">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <strong>
          <div className="name">{name}</div>
        </strong>
      </div>
    </div>
  );
}
