import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/loader";
import { Clock, ArrowDown, Star } from "lucide-react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch(() => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader designs="my-[46px]" />;

  if (!restaurant) return <div className="h-[150px]"></div>;

  return (
    <div className="flex flex-1 gap-5 max-xs:flex-col sm:flex-row sm:items-center">
      <img
        src={restaurant.photo}
        alt={restaurant.name}
        className="size-[150px] rounded-2xl object-cover shadow-inner"
      />

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-zinc-600">
          <span className="pill bg-white/80">
            <ArrowDown className="size-4 text-red-400" />
            min {restaurant.minPrice} TL
          </span>
          <span className="pill bg-white/80">
            <Clock className="size-4 text-red-400" />≈
            {restaurant.estimatedDelivery} dk
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold">
          {restaurant.name}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="flex items-center gap-2 text-red-500">
            <Star className="size-5" />
            {restaurant.rating}
          </span>
          <button className="rounded-full border border-red-200 px-4 py-2 text-red-500 transition hover:bg-red-50">
            Yorumları Gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
