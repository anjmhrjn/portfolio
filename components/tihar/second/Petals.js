import Starburst from "../first/Starburst";
import InnerLayer from "../InnerLayer";

export default function Petals({ rangoliData }) {
  return (
    <div className="">
      <div class="flower">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="petal petal-border-radius"
            style={{ backgroundColor: rangoliData?.outerMainColor }}
          >
            <div
              className="petal petal-border-radius"
              style={{
                backgroundColor: rangoliData?.outerSecondaryColor,
                width: "30px",
                height: "50px",
                bottom: "-30px",
                left: "13px",
              }}
            ></div>
          </div>
        ))}
        <div className="center">
          <InnerLayer rangoliData={rangoliData} />
        </div>
      </div>
    </div>
  );
}
