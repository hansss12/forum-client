import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useFetchProfile } from "../store/actions/action";
import NavbarForum from "../components/forum/NavbarForum";

export default function Layout() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(useFetchProfile())
  }, [])
  return (
      <>
        <NavbarForum />
        <Outlet />
      </>
  );
}
