import css from "./RoomIdForm.module.css";
import logo from "../../assets/logo.png"
import { useFormik } from "formik";

const RoomIdForm = () => {

    const formik=useFormik({
        initialValues:{
            roomId:"",
            name:""
        },
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async(values)=>{
            alert(values.name);

        }
    })
  return (
    <div className={css.componentContainer}>
    <img src={logo} alt=""  className={css.logo}/>
      <form action="" onSubmit={formik.handleSubmit}>
        <input type="text" placeholder="RoomId" className={css.inputFeilds}  {...formik.getFieldProps("roomid")}/>
        <input type="text" placeholder="Name" className={css.inputFeilds}  {...formik.getFieldProps("name")}/>
        <button type="submit" className={`${css.joinBtn} bg-[#4460F1]`}>
          Join Room
        </button>
      </form>
      <h2>Dont have room Id ? <span>Create one</span></h2>
    </div>
  );
};

export default RoomIdForm;
