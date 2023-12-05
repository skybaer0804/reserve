import { useMediaQuery } from "react-responsive";

export default function Media() {
  const mobile = useMediaQuery({ maxDeviceWidth: 767 });

  const tablet = useMediaQuery({ minDeviceWidth: 768 });

  const desktop = useMediaQuery({ minDeviceWidth: 992 });

  return (
    <>
      <div>
        <div id={"div_1"}></div>
        <div id={"div_2"}></div>
        <div id={"div_3"}></div>
        <div id={"div_4"}></div>
        <div id={"div_5"}></div>
        <div id={"div_6"}></div>
      </div>
    </>
  );
}
