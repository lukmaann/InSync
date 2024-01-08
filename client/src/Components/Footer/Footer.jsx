const Footer = () => {
  const date = new Date();
  return (
    <div  className="text-gray-400">©{date.getFullYear()} Lukn development || All right reserved</div>
  );
};

export default Footer;
