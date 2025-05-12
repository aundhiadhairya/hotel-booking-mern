import "./featured.css";
import useFetch from "../../hooks/useFetch";
import delhi from "./delhi.jpg";
import manali from "./manali.jpg";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={delhi} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>
                {/* {data[0]} */}
                100+ properties
              </h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={manali} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Manali</h1>
              <h2>
                {/* {data[1]} */}
                500+ properties
              </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kerala</h1>
              <h2>
                {/* {data[2]} */}
                200+ properties
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
