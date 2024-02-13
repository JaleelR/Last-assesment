import React, { useEffect } from "react";
import SnackOrBoozeApi from "./Api";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({drinks, snacks}) {
 
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>

            <div>
              <h4>Snacks</h4> 
              {snacks}
            </div>
            
            <div>
              <h4>Drinks</h4>
              {drinks}
          </div>
            
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
