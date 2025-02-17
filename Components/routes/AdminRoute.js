import { AuthContext } from "../../context/AuthContext";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;