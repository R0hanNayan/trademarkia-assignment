import { useContext } from "react";
import logo from "../assets/logo.png";
import { LuSearch } from "react-icons/lu";
import { LuFilter } from "react-icons/lu";
import { BsFilterLeft } from "react-icons/bs";
import { TbShare } from "react-icons/tb";
import { Context } from "../context/Context";
import toast from "react-hot-toast";

function Navbar() {
  const {
    searchQuery,
    setSearchQuery,
    fetchTrademarks,
    setCurrent_owners,
    setAllLaw_firms,
    setAllAttorneys,
    setOwners,
    setLaw_firms,
    setAttorneys,
    trademarks
  } = useContext(Context);

  const handleClick = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a value to search for.");
    } else {
      setOwners([]);
      setLaw_firms([]);
      setAttorneys([]);
      setCurrent_owners({ buckets: [] });
      setAllAttorneys({ buckets: [] });
      setAllLaw_firms({ buckets: [] });
      fetchTrademarks();
    }
  };

  return (
    <section className="bg-[#F8FAFE]">
      <header
        className="  clear-start flex items-center py-8 px-14 gap-16 justify-between max-[1250px]:gap-10
  max-[1250px]:px-10 min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]  max-[850px]:px-14
  max-[650px]:px-5 max-[650px]:gap-4 max-[650px]:flex-col max-[650px]:items-start   max-[650px]:py-6"
      >
        <div>
          <img
            src={logo}
            alt="logo"
            className=" h-[29.93px] max-[1250px]:h-[24px]"
          />
        </div>
        <div className=" flex items-center gap-[18px]">
          <div
            className="bg-[#FFFFFF] border-[#D4D4D4] border px-5 rounded-[12px] py-0.5 w-[500.79px] max-[1250px]:w-[320px] flex items-center gap-4
           max-[650px]:w-auto max-[650px]:gap-2"
          >
            <LuSearch className=" cursor-pointer text-[#636363]" size={20} />

            <input
              type="text"
              placeholder="Search Trademark Here eg. Mickey Mouse "
              className=" bg-transparent h-full w-full text-[#636363] py-3 outline-none text-[16px] tracking-wide font-medium 
                max-[650px]:py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
            />
          </div>
          <button
            className=" bg-[#4380EC] hover:bg-[#1C5BD2] text-[#FFFFFF] text-[16px] font-semibold py-3 px-6 rounded-[12px] tracking-wider 
            max-[650px]:py-2"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <button className=" bg-[#E7760E] hover:bg-[#C76001] py-3 px-8 rounded-[12px] tracking-wider text-[#FFFFFF] text-[16px] font-semibold max-[850px]:hidden">
          Apply for Trademark
        </button>
      </header>
      
      <section className="bg-[#FEFEFE] ">
        <section
          className=" px-14 mt-4 max-[1250px]:px-10  min-[2000px]:ml-[50%] min-[2000px]:translate-x-[-50%] min-[2000px]:w-[2000px]
             max-[850px]:px-14 max-[650px]:px-5 max-[650px]:gap-4 max-[650px]:flex-col max-[650px]:items-start"
        >
          <p className=" text-[#4B5563] text-[16px] font-semibold tracking-wide leading-[30px] py-4 max-[650px]:text-[14px]">
            About {trademarks?.total?.value ?? 0} Trademarks found for "
            {searchQuery}"
          </p>
          <hr color="#E7E6E6" className=" h-[1.5px]" />
          <section
            className=" flex items-center justify-between py-6 
              max-[650px]:py-2 max-[650px]:gap-4 max-[650px]:flex-col max-[650px]:items-start max-[650px]:pb-4"
          >
            <div className=" flex items-center gap-4">
              <h1 className=" text-[#4B5563] text-[16px] leading-[30px] font-semibold tracking-wide max-[650px]:text-[14px]">
                Also try searching for :
              </h1>
              <h2
                className=" bg-[#FEF7F0] border border-[#E7760E] text-[#E7760E] px-3.5 py-2 font-semibold tracking-wide rounded-lg
                  max-[650px]:py-1 max-[650px]:px-2 max-[650px]:text-[14px]"
              >
                nike*
              </h2>
              <h2
                className=" bg-[#FEF7F0] border border-[#E7760E] text-[#E7760E] px-3.5 py-2 font-semibold tracking-wide rounded-lg
                  max-[650px]:py-1 max-[650px]:px-2 max-[650px]:text-[14px]"
              >
                like*
              </h2>
            </div>
            <div className=" flex items-center gap-6 pr-24 max-[1250px]:pr-12 max-[650px]:pr-0 max-[650px]:w-full max-[650px]:justify-between">
              <span
                className=" flex items-center gap-2 border-[#C8C8C8] border px-4 text-[14px] max-[650px]:text-[12px] py-2 rounded-lg cursor-pointer"
              >
                <LuFilter className="text-[#575757] text-[20px] max-[650px]:text-[16px]" />
                <span className=" text-[#575757] tracking-wide font-medium">
                  Filter
                </span>
              </span>
              <span className=" border border-[#C8C8C8] p-2 rounded-full cursor-pointer">
                <TbShare color="#575757" size={18} className=" font-semibold" />
              </span>
              <span className=" border border-[#C8C8C8] p-2 rounded-full cursor-pointer">
                <BsFilterLeft
                  color="#575757"
                  size={18}
                  className=" font-semibold"
                />
              </span>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Navbar;
