import { BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,} from "recharts";

const Ratings = ({ ratings }) => {
  
  const sortedRatings = [...ratings].reverse();

  return (
    <div className="w-full h-[300px] pb-10 border-b-2 border-[#00193120]">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Ratings</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sortedRatings} layout="vertical">
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
          <XAxis type="number" axisLine={false} tickLine={false}/> 

          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} contentStyle={{ backgroundColor: "#fff" }}/>
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Ratings;
