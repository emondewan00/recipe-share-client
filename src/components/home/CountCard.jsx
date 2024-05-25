import CountUp from "react-countup";

const CountCard = () => {
  return (
    <div className="flex-1 text-center border-r border-zinc-200 last:border-none">
      <p className="text-zinc-500 ">Downloads</p>
      <CountUp end={200} className="text-3xl font-bold text-zinc-900 " />
      <p className="text-zinc-400 ">Jan 1st - Feb 1st</p>
    </div>
  );
};

export default CountCard;
