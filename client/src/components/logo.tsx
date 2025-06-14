import { Link } from "wouter";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <img
        src="https://patient-roy.github.io/jekall/images/icon-categories/i-removebg-preview.png"
        alt="Jekall Mobiles Logo"
        className="h-10 w-auto mr-2"
      />
      <span className="text-xl font-poppins font-semibold">Jekall Mobiles</span>
    </Link>
  );
};

export default Logo;
