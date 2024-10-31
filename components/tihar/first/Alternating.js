export default function Alternating({ rangoliData }) {
  return (
    <div
      className="rounded-circle"
      style={{ backgroundColor: rangoliData?.innerSecondaryColor, width: "80px", height: "80px", position: "relative" }}
    >
      <div
        className="rounded-circle"
        style={{ backgroundColor: rangoliData?.innerMainColor, width: "50px", height: "50px", position: "absolute", top: "15px", left: "15px" }}
      ></div>
    </div>
  );
}
