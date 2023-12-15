function CardComp() {
  return (
    <>
      <div className="flex flex-col rounded-lg bg-gradient-to-br from-blue-500 to-blue-800 text-white p-5 gap-3 w-[290px] max-w-[290px] ">
        <div className="mb-6">
          <p>Bruno Seifert</p>
        </div>
        <div>
          <p>4298 4672 3341 9807</p>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <p>Validade</p>
            <p>12/25</p>
          </div>
          <div className="text-center">
            <p>CVV</p>
            <p>***</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComp;
