import { Link } from "wouter";
import logo from "@/assets/images/favicon/favicon.svg";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="Jekall Mobiles Logo"
        width={80}
        height={80}
        className="h-10 w-auto mr-2 object-contain rounded-full shadow-[0_4px_12px_rgba(255,255,0,0.5)]"
      />
      <span className="text-xl font-poppins font-semibold">Jekall Mobiles</span>
    </Link>
  );
};

export default Logo;
