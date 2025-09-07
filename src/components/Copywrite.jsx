const Copywrite = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-[#080017] text-purple-200 py-6 text-center">
      <p className="text-base sm:text-3xl">
        &copy; {year} DevQuantum, All rights reserved
      </p>
    </div>
  );
};

export default Copywrite;
