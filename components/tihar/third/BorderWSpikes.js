import OuterLayer from "../OuterLayer";

export default function BorderWSpikes({ rangoliData }) {
  return (
    <div>
      <div
        className="borders-with-spikes d-flex justify-content-center align-items-center"
        style={{
          width: "330px",
          height: rangoliData?.outerLayerType === "hearts" ? "300px" : "330px",
          backgroundColor: rangoliData?.borderColor,
        }}
      >
        <div
          className="rounded-circle"
          style={{
            width: rangoliData?.outerLayerType === "hearts" ? "280px" : "280px",
            height: rangoliData?.outerLayerType === "hearts" ? "250px" : "275px",
            backgroundColor: rangoliData?.fillColor,
          }}
        >
          <OuterLayer rangoliData={rangoliData} />
        </div>
      </div>
    </div>
  );
}
