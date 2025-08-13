const BackgroundPattern = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
      <div className="pointer-events-none absolute -z-10 top-1/2 right-[-10%] h-[360px] w-[360px] md:h-[520px] md:w-[520px] rounded-full bg-primary/10 blur-3xl" />
    </>
  );
};

export default BackgroundPattern;
