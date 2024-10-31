import Alternating from "./first/Alternating";
import Simple from "./first/Simple";
import Starburst from "./first/Starburst";

export default function InnerLayer({ rangoliData }) {
  return (
    <div>
      {rangoliData?.innerLayerType === "starburst" ? (
        <Starburst rangoliData={rangoliData} />
      ) : rangoliData?.innerLayerType === "alternating" ? (
        <Alternating rangoliData={rangoliData} />
      ) : (
        <Simple rangoliData={rangoliData} />
      )}
    </div>
  );
}
