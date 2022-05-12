import React from 'react';
import Banner from '../Banner/Banner';
import Clint from '../Clint/Clint';
import Inventory from '../Inventory/Inventory';
import Team from '../Team/Team';
 

const Home = () => {
          return (
                    <div>
                    

                        <Banner></Banner>
                        <Inventory></Inventory>
                        <Team></Team>
                        <Clint></Clint>
                          


                    </div>
          );
};

export default Home;