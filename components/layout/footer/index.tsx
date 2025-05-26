import SupportServices from "./SupportSevices";
import StoreLocatorBar from "./StoreLocatorBar";
import MainFooter from "./MainFooter";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-gray-100">
      <SupportServices></SupportServices>
      <StoreLocatorBar></StoreLocatorBar>
      <MainFooter></MainFooter>
    </footer>
  );
}
