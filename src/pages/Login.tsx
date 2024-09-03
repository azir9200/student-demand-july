import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "./utils/verifyToken";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    userId: "A-0002",
    password: "Admin123",
  };
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(" data from login  => ", data);
    const toastId = toast.loading("Loading to your page !");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
    
      const res = await login(userInfo).unwrap();
  
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log("user azir =>", user);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
      // navigate("/");
    } catch (err) {
      toast.error("Something went wrong ! Bello", {
        id: toastId,
        duration: 2000,
      });
      console.log(err);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div className="py-4">
          <h2 className="text-3xl font-bold mb-4 md:text-5xl">Login Now</h2>
        </div>
        <PHInput type="text" name="id" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};
export default Login;
