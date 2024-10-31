import OuterLayer from "./OuterLayer";
import BorderWSpikes from "./third/BorderWSpikes";
import SimpleBorder from "./third/SimpleBorder";

export default function MainRangoli({ rangoliData }) {
  return (
    <div className="d-flex justify-content-center">
      {rangoliData?.borderType === "simple" ? (
        <SimpleBorder rangoliData={rangoliData} />
      ) : rangoliData?.borderType === "spikes" ? (
        <BorderWSpikes rangoliData={rangoliData} />
      ) : (
        <OuterLayer rangoliData={rangoliData} />
      )}
    </div>
  );
}
