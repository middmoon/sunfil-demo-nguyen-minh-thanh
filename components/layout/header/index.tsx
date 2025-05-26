import AnnouncementBar from "./AnnouncementBar";
import MainHeader from "./MainHeader";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex flex-col">
      <AnnouncementBar></AnnouncementBar>
      <MainHeader></MainHeader>
      <NavBar></NavBar>
    </header>
  );
}
