import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem, createItem } from "../../redux/actions/basket-actions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  // sepet verisine abone ol
  const { basket } = useSelector((store) => store.basket);

  // ekrana basılan ürün sepette varsa onu bul
  const basketItem = basket.find((item) => item.id === product.id);

  // + butonuna tıklanınca
  const handleAdd = () => {
    basketItem
      ? // ürün sepette varsa miktarını arttır
        dispatch(updateItem(product.id, basketItem.amount + 1))
      : // ürün sepette yoksa ürünü oluştur
        dispatch(createItem(product));
  };

  return (
    <div className="box grid grid-cols-[1fr_130px] gap-4 p-4 transition hover:-translate-y-1">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="muted">{product.desc}</p>
        </div>

        <p className="text-lg font-semibold text-red-500">{product.price} ₺</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={product.photo}
          alt={product.title}
          className="object-cover size-full"
        />

        <button
          onClick={handleAdd}
          className="absolute right-3 bottom-3 grid size-9 place-items-center bg-white text-red-500 rounded-full shadow-lg transition hover:bg-red-50 font-bold text-shadow-black"
        >
          {basketItem ? basketItem.amount : <Plus />}
        </button>
      </div>
    </div>
  );
};

export default Card;
