import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Contuct from '../Contuct/Contuct';
import Inventory from '../Inventory/Inventory';
import Loading from '../Loading/Loading';
import Team from '../Team/Team';
 

const Home = () => {

    const [loading]= useState()




    if(loading){

        return <Loading></Loading>
      }
          return (
                    <div>
                    

                        <Banner></Banner>
                        <Inventory></Inventory>
                        <Team></Team>
                      <Contuct></Contuct>
                          


                    </div>
          );
};

export default Home;