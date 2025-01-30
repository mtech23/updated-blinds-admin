import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import { Dashboard } from "../Screens/Dashboard";



import { GalleryManagement } from "../Screens/GalleryManagement";



// end

import Profile from "../Screens/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Error from "../Screens/Error";
import { BlogManagement } from "../Screens/BlogManagement";
import { AddBlog } from "../Screens/BlogManagement/AddProduct";
import { PortfolioManagement } from "../Screens/PortfolioManagement";
import { AddPortfolio } from "../Screens/PortfolioManagement/AddProduct";
export default function AdminRouter() {
  return (
    <BrowserRouter basename="/blinds-admin">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />

        {/* <Route path="/dashboard" element={<ProtectedRoutes Components={Dashboard} />} /> */}
        <Route
          path="/dashboard"
          element={<ProtectedRoutes Components={Dashboard} />}
        />

        <Route
          path="/portfolio-management"
          element={<ProtectedRoutes Components={PortfolioManagement} />}
        />
        <Route
          path="/add-portfolio"
          element={<ProtectedRoutes Components={AddPortfolio} />}
        />

        <Route
          path="/blogs-management"
          element={<ProtectedRoutes Components={BlogManagement} />}
        />
        <Route
          path="/add-blog"
          element={<ProtectedRoutes Components={AddBlog} />}
        />

        <Route
          path="/gallery-management"
          element={<ProtectedRoutes Components={GalleryManagement} />}
        />

        {/* <Route path="/menu-management/menu-details/:id" element={<ProtectedRoutes Components={menuDetails} />} /> */}
        <Route
          path="/profile"
          element={<ProtectedRoutes Components={Profile} />}
        />
        <Route
          path="/profile/edit-profile"
          element={<ProtectedRoutes Components={EditProfile} />}
        />
        <Route path="/profile/change-password" element={<ChangePassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
