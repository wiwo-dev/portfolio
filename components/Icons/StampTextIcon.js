export default function StampTextIcon({
  text = "CURVED TEXT GOES HERE",
  radious = 300,
  fontSize = 36,
  paddingTop = 10,
  angle = 14,
  rotationOffset = -140,
  iconSize = 100,
  children,
  style,
}) {
  const moveLeftBy = fontSize / 3.14;

  return (
    <div
      className="relative text-xl"
      style={{ paddingLeft: `${radious / 2 - moveLeftBy}px`, width: `${radious}px`, height: `${radious}px`, ...style }}>
      <div
        className="absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center border-[6px] border-black bg-white rounded-full"
        style={{ fontSize: "56px" }}>
        <div style={{ width: `${iconSize}px`, height: `${iconSize}px` }}>{children}</div>
      </div>
      {Array.from(text).map((el, ind) => (
        <span
          key={ind}
          className="inline-block absolute"
          style={{
            rotate: `${ind * angle + rotationOffset}deg`,
            height: `${radious}px`,
            //width: `${15}px`,
            fontSize: `${fontSize}px`,
            paddingTop: `${paddingTop}px`,
            letterSpacing: 1.2,
            fontFamily: "Courier",
          }}>
          {el}
        </span>
      ))}
    </div>
  );
}
