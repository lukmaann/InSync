import Footer from "../../Components/Footer/Footer";
import RoomIdForm from "../../Components/Forms/RoomIdForm";
import codingImg from "../../assets/coding.png";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.pageContainer}>
      <div className={css.main}>
        <div className="w-[50%] ">
          <img className={css.homeImg} src={codingImg} alt="" />
          <h1 className={css.slogan}>
            Code Together, Thrive Together: Your Real-time Creative Hub with
            InSync Magic!
          </h1>
        </div>
        <div className="h-[90%] flex justify-center items-center">
          <div className={css.centerContainer}>
          
            <div className={css.formWrapper}>
              <RoomIdForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
