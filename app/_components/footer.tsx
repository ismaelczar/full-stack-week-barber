const Footer = () => {
  return (
    <div className="flex flex-col justify-center py-6 px-5 w-full bg-secondary">
      <p className="text-gray-400 text-xs">&copy {new Date().getFullYear()} <span className="font-semibold">FSW Barber</span></p>
    </div>
  );
}

export default Footer;