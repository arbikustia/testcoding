
import "./App.css";

const App = () => {


  const product = [
    {
      id: 1,
      makanan: 'bakso',
      harga: 12000
    },
    {
      id: 2,
      makanan: 'Ayam Bakar ',
      harga: 15000
    },
    {
      id: 3,
      makanan: 'Mie Ayam ',
      harga: 13000
    }
  ]





  return (
    //soal 1
    <div >
      <header className="header">
        <p className="card-header">ID</p>
        <p className="card-header">Nama Makanan</p>
        <p className="card-header">Harga</p>
      </header>
      <main>
        {product.map(item =>
          <div key={item.id} className="cell">
            <div className="product1">{item.id}</div>
            <div className="product1">{item.makanan}</div>
            <div className="product1" id="harga1">{item.harga}</div>
          </div>
        )}
        <div>
          <h4>Total Harga: {product[0].harga + product[1].harga + product[2].harga} </h4>
        </div>
      </main>

      <div>
        {product.map(harga =>
          <div key={harga.id}>
            {harga.harga >= 12500 ? harga.harga : ''}
          </div>
        )}
      </div>

    </div>




  );
}

export default App;
