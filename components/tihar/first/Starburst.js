export default function Starburst({ rangoliData }) {
  return (
    <div className={""}>
      <div
        className="rounded-circle"
        style={{ backgroundColor: rangoliData?.innerMainColor, width: "80px", height: "80px", position: "relative" }}
      >
        <div className="starburst" style={{ backgroundColor: rangoliData?.innerSecondaryColor, width: "80px" }}>
          <div
            className="rounded-circle"
            style={{
              backgroundColor: rangoliData?.innerMainColor,
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "15px",
              left: "15px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
