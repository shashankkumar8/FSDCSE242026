import React from 'react'

function FetchProducts() {

    React.useEffect(() => {

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
        }

        catch (error) {
            console.error('Error fetching products:', error);
        }

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
    }, []);

  return (
    <div>
      <h2>Fetch Products</h2>
    </div>
  )
}

export default FetchProducts
