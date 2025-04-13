export default function Header() {
  return (
    <nav className="max-w-7xl mx-auto py-6 px-4 absolute top-0 right-0 left-0 z-999">
      <div className="flex justify-between items-center fixed-top-0">
        <div className="flex flex-col justify-center items-center font-josefin-sans text-brand w-full">
          <p>
            <span className="text-[3em]/10">C</span>
            <span className="text-[2.4em]/10">ELESTIA</span>
          </p>
          <p className="text-[1.3em]/2">SUITES</p>
        </div>
      </div>
    </nav>
  );
}
