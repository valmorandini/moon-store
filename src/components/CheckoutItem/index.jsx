import './styles.scss';

export const CheckoutItem = ({product, qty}) => {

    return (
        <>
          <div className="listCheckout row">
            <div className="col-md-5 col-lg-3 col-xl-3  ">
              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <a href={`/item/${product.id}`}>
                  <div className="mask">
                    <img className="img-check"src={product.img} alt={product.title}/>
                    <div className="mask rgba-black-slight"></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
              <div className="iContainer">
                  <div className="iInfo" >
                    <h6>{product.title}</h6>
                    <p>cantidad: {qty}</p>
                  </div>             
                <div className="d-flex justify-content-between">
                  <p className="mb-0"><span><strong id="summary">${product.price*qty}</strong></span></p >
                </div>
              </div>
            </div> 
            </div>
          
        </>
    )
}

