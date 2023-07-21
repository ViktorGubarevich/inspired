import Category from "./Category";
import Gender from "./Gender";

const Navigation = () => (
  <nav>
    <div className="container">
      <Gender />
      <Category />
    </div>
  </nav>
);

export default Navigation;
