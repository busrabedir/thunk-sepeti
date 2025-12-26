const OrderInfo = ({ basket }) => {
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  return (
    <div className="box p-5 h-fit space-y-4 md:sticky md:top-5">
      <h2 className="text-xl font-semibold">Sipariş Detayları</h2>

      <p className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Ürün adedi</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>

      <p className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Toplam Fiyat</span>
        <span className="text-lg font-bold text-red-500">
          {totalPrice.toFixed(2)}₺
        </span>
      </p>

      <button className="w-full rounded-full bg-red-500/90 py-3 text-white font-semibold shadow-lg shadow-red-200 transition hover:bg-red-500">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default OrderInfo;
