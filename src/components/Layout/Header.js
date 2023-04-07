/*import{Fragment} from "react";
import classes from "./Header.module.css";
import mainheaderImage from "../../assests/img.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header =(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>FOOD ORDERING APP</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]} >
                <img src={mainheaderImage} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    )
        
    

}
export default Header;*/
import { Fragment } from "react";
import mainheaderImage from "../../assests/img.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Ordering App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
 
export default Header;