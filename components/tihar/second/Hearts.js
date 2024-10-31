import Simple from "../first/Simple";
import Starburst from "../first/Starburst";
import InnerLayer from "../InnerLayer";

export default function Hearts({ rangoliData }) {
  return (
    <div className="">
      <div class="flower">
        {[...Array(4)].map((_, index) => (
          <span className="heart" style={{ backgroundColor: rangoliData?.outerMainColor }}></span>
        ))}
        <div style={{ position: "absolute", bottom: "-10%", right: "-15%" }}>
          <InnerLayer rangoliData={rangoliData} />
        </div>
      </div>
    </div>
  );
}
