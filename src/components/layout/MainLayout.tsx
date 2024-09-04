import { Button, Layout } from "antd";
const { Header, Content } = Layout;
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header className="flex justify-center items-center pr-6 ">
          <div>
            {isLoggedIn ? (
              <Button className="bg-blue-400 p-3" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button className="bg-green-400 p-3" onClick={handleLogin}>
                Login
              </Button>
            )}
          </div>
          <div>
            {" "}
            <Navbar></Navbar>
          </div>
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
