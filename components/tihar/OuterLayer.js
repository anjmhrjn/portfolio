import Hearts from "./second/Hearts";
import Petals from "./second/Petals";

export default function OuterLayer({ rangoliData }) {
  return (
    <div style={{ position: "relative" }}>
      {rangoliData?.outerLayerType === "petals" ? (
        <div style={{ position: "absolute", top: "40px", left: "110px" }}>
          <Petals rangoliData={rangoliData} />
        </div>
      ) : (
        rangoliData?.outerLayerType === "hearts" && (
          <div style={{ position: "absolute", left: "5px" }}>
            <Hearts rangoliData={rangoliData} />
          </div>
        )
      )}
    </div>
  );
}
