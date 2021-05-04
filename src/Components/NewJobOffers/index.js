import "./index.css";
import Card from "../Card/index";

export default function NewJobOffers() {
  const data = [
    {
      id: "Jajsasdjn",
      heading: "Junior Java Developer",
      time: "2 hours ago",
      country: "PickSaaS",
      state: "Wrclaw, Polska",
      data:
        "I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B",
    },
    {
      id: "mawnn",
      heading: "Junior Project Manager",
      time: "3 hours ago",
      country: "Frontkom",
      state: "Lublin, Polska",
      data:
        "Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!",
    },
    {
      id: "kamskm",
      heading: "Junior Project Manager",
      time: "1 day ago",
      country: "Frontkom",
      state: "Lublin, Polska",
      data:
        "I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) $ up to PLN 550 net / MD B2B",
    },
  ];
  return (
    <div className="new_job_offer_container">
      <div className="top">
        <p className="heading">Newest Job Offers</p>
        <a className="view" href="#">
          View all job offers ➜
        </a>
      </div>
      <div className="cards">
        {data.map((card, index) => {
          return (
            <>
              {index !== 0 ? <hr /> : undefined}
              <Card
                heading={card.heading}
                time={card.time}
                country={card.country}
                state={card.state}
                data={card.data}
                key={card.id}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
