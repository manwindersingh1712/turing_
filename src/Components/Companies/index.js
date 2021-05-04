import "./index.css";
import logo from "../../assets/images/briefcase.png";
import Company from "../Company";

export default function Companies() {
  const data = [
    { name: "GrandParade", logo: logo },
    { name: "Seargin", logo: logo },
    { name: "DEX Ventures", logo: logo },
    { name: "NBC", logo: logo },
    { name: "SVT SP Zoo", logo: logo },
    { name: "DG Tech", logo: logo },
    { name: "PickSaaS", logo: logo },
    { name: "BlackRose", logo: logo },
    { name: "FrontKom", logo: logo },
  ];
  return (
    <div className="companies">
      <div className="heading">Featured Companies</div>
      <div className="company_data">
        {data.map((comp) => {
          return <Company name={comp.name} logo={comp.logo} key={comp.name} />;
        })}
      </div>
    </div>
  );
}
