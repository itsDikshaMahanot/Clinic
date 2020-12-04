import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <React.Fragment>
            <footer className="page-footer" >
                <div class="container-fluid text-center text-md-left" style={{backgroundColor: "darkturquoise"}}>
                <div className="row"  >
                <div class="col-md-6 mt-md-0 mt-5">
                <h5 class="text-uppercase" style= {{textDecoration: "bold"}}>
                <i class="fa fa-address-book" aria-hidden="true">Our Address
                <br/>
                #3037 Near Shaifaly Public School<br/> ludhiana</i></h5>
       
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"></hr>
                </div>
                </div>

            </footer>
        </React.Fragment>

    )

}

export default Footer