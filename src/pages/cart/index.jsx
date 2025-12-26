import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import BasketEmpty from "./basket-empty";
import Card from "./card";
import OrderInfo from "./order-info";

const Cart = () => {
  const { isLoading, error, basket } = useSelector((store) => store.basket);

  return (
    <div className="container space-y-6">
      <div>
        <p className="pill bg-white/80">Siparişiniz</p>
        <h1 className="text-3xl font-bold mt-3"> Sepet</h1>
        <p className="muted mt-1">
          Eklediğiniz ürünleri düzenleyin ve teslimata hazırlanın.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : basket.length === 0 ? (
            <BasketEmpty />
          ) : (
            basket.map((product) => <Card key={product.id} product={product} />)
          )}
        </div>
        <OrderInfo basket={basket} />
      </div>
    </div>
  );
};

export default Cart;
