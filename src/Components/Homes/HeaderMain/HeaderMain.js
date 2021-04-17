import React from 'react';

const HeaderMain = () => {
    return (
        <div className="my-3">
        <div className="row  d-flex align-items-center">
            <div className="col-md-6 text-center">
                <img className="img-fluid" src="https://i.ibb.co/SyR7QQb/digital-marketing-team-41910-363.png" alt=""/>

            </div>
            <div className="col-md-6 pe-5">
                <h1 className="display-3">For Your <span className="text-primary">Digital</span> Marketing <span className="text-warning">Success</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta perferendis quidem aut non, aperiam ea ex amet, repellendus suscipit quas quis dolore? Facere dolores, consequuntur cumque assumenda rerum quasi ex ducimus odit voluptatem suscipit soluta officiis architecto repellat! </p>
                <form className="form-control d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-warning px-5" type="submit">Search</button>
      </form>


            </div>
        </div>
    </div>
    );
};

export default HeaderMain;