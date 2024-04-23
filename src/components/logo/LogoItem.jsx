import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import LogoBlack from "../../../public/assets/imgs/logo/NBOlogo-new.png";
import Image from "next/image";

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/"} className="logo-dark">
          <Image priority width={136} height={45} src={LogoBlack} alt="Site Logo" />
        </Link>
        <Link href={"/"} className="logo-light">
          <Image priority width={100} height={33} src={LogoWhite2} alt="Site Logo" />
        </Link>
      </div>
    </>
  );
}
