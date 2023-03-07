import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]); //Состаяние  карзины
  const [searchValue, setSearchValue] = React.useState(""); // Состаяние инпута
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    //что бы не отправлялся запрос на бэк постоянно оборачиваем в React.useEffect()
    axios
      .get("https://6401bfb73779a862625cf291.mockapi.io/items")
      .then((res) => {
        setItems(res.data); //при первом рендинге отправляем запрос на получение всех кроссовок с сервера
      });
    axios
      .get("https://6401bfb73779a862625cf291.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data); //отправляем запрос на получение  кроссовок из корзины с сервера
      });
  }, []);
  //Корзина
  const onAddToCart = (obj) => {
    
    axios.post("https://6401bfb73779a862625cf291.mockapi.io/cart", obj);//сохраняем товары в корзине на бэке

    setCartItems((prev) => [...prev, obj]); //отображаем товары в корзине
  };

const onRemoveItem = (id) => {
  //axios.delete(`https://6401bfb73779a862625cf291.mockapi.io/cart/${id}` )
  setCartItems((prev) => prev.filter(item => item.id !== id));
}

  //Инпут
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value); //что введено в инпуте
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {" "}
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}{" "}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className=" clear cu-p"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}

            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
