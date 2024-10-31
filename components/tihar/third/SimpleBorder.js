import OuterLayer from "../OuterLayer";

export default function SimpleBorder({ rangoliData }) {
  return (
    <div className="">
      <div
        className="rounded-circle"
        style={{
          width: rangoliData?.outerLayerType === "hearts" ? "290px" : "290px",
          height: rangoliData?.outerLayerType === "hearts" ? "260px" : "290px",
          //   backgroundColor: rangoliData?.borderColor,
          border: `5px solid ${rangoliData?.borderColor}`,
        }}
      >
        <div
          className="rounded-circle"
          style={{
            width: rangoliData?.outerLayerType === "hearts" ? "280px" : "280px",
            height: rangoliData?.outerLayerType === "hearts" ? "250px" : "280px",
            backgroundColor: rangoliData?.fillColor,
          }}
        >
          <OuterLayer rangoliData={rangoliData} />
        </div>
      </div>
    </div>
  );
}
