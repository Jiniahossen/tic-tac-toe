function Sqaure() {
  return (
    <button className="w-12 h-12 border border-gray-600 m-1 bg-white leading-9 text-lg">
      X
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div>
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div>
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
    </>
  );
}
