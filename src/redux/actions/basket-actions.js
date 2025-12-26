import api from "../../api";
import ACTIONS from "../actions/action-types";

// sepetteki ürünleri alıp reducer'a aktaracak thunk aksiyonu
export const getBasket = () => (dispatch) => {
  dispatch({ type: ACTIONS.BASKET_LOADING });

  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: ACTIONS.BASKET_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ACTIONS.BASKET_ERROR, payload: err.message })
    );
};

// sepete yeni ürün ekleyen thunk aksiyonu
export const createItem = (product) => (dispatch) => {
  // 1) sepete kaydedilecek veriyi hazırla
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  // 2) api'a sepete eklemek için istek at
  api
    .post("/cart", newItem)
    // 3) reducer'a sepet eleman ekleneceğini haber ver
    .then((res) => dispatch({ type: ACTIONS.CREATE_ITEM, payload: res.data }))
    .catch(() => alert("Bir sorun oluştu"));
};

// sepeteki ürünü güncelleyen thunk aksiyonu
export const updateItem = (productId, newAmount) => (dispatch) => {
  // api'a istek atıp amount alanını güncelle
  api
    .patch(`/cart/${productId}`, { amount: newAmount })
    // istek başarılı olursa reducer'a haber gönder
    .then((res) => dispatch({ type: ACTIONS.UPDATE_ITEM, payload: res.data }))
    .catch(() => alert("İşlem başarısız"));
};

// sepetten ürün kaldır
export const removeItem = (productId) => (dispatch) => {
  // api'a istek atıp ürünü kaldır
  api
    .delete(`/cart/${productId}`)
    // istek başarılı olursa reducer'a haber gönder
    .then(() => dispatch({ type: ACTIONS.REMOVE_ITEM, payload: productId }))
    .catch(() => alert("İşlem başarısız oldu"));
};
