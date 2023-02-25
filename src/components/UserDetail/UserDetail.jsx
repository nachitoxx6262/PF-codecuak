//hooks
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetailById } from "../../redux/action";
import { useParams } from "react-router-dom"
import NavBar from "../NavBar/NavBar";
import UserProfile from "../blueprints/UserProfile/UserProfile";

const UserDetail = () => {
  const token  = localStorage.getItem("token")
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userDetail)
  console.log("userdetaildeuserdetai", userDetail);

  const { id } = useParams();
  console.log(id,"iddaisjdiasjdskjhasdflgkjahsdg9iusdhjxczn");
  console.log(token,"TOKEEEEEEEEEEEEEEEEEEEN");

  useEffect(() => {
    dispatch(getUserDetailById(id,token))
  }, [dispatch])

  useEffect(() => {
    dispatch(getUserDetailById(id,token))
  }, [dispatch, userDetail])


  return (
    <div>
      <NavBar />
      <UserProfile userData={userDetail} />
    </div>
  )
}

export default UserDetail