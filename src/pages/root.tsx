import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

interface RootPageProps {
  header: string;
  children: JSX.Element;
}

const RootPage = (props: RootPageProps) => {
  return (
    <div className="h-screen">
      <Header active={props.header} />
      {props.children}
      <Footer />
    </div>
  );
};

export default RootPage;
