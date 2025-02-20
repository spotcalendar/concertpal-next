const AddressForm = () => {
  return (
    <form className="flex flex-col items-center gap-8" action="">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-[#4A4C56] text-xl font-semibold">Enter your City*</p>
          <input
            className="w-[242px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
            type="text"
            placeholder="City"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[#4A4C56] text-xl font-semibold">Enter your State*</p>
          <input
            className="w-[242px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
            type="text"
            placeholder="State"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[#4A4C56] text-xl font-semibold">Enter your Zip Code*</p>
        <input
          className="w-[526px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
          type="text"
          placeholder="Zip Code"
        />
      </div>

      <button className="w-[330px] bg-[#D3F4EF] rounded-md flex justify-center items-center gap-2 p-3">
        <p className="font-medium">Finish</p>
      </button>
    </form>
  );
};

export default AddressForm;
