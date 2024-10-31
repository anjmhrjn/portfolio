export default function Simple({ rangoliData }) {
  return (
    <div
      className="rounded-circle p-3"
      style={{ backgroundColor: rangoliData?.innerMainColor, width: "80px", height: "80px" }}
    ></div>
  );
}
