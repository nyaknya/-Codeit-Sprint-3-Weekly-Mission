import Header from "@/components/Header";
import SharedTitlebar from "@/components/SharedComponents/SharedTitlebar";
import SharedContent from "@/components/SharedComponents/SharedContent";
import Footer from "@/components/Footer";

function SharedPage() {
  return (
    <>
      <Header />
      <SharedTitlebar />
      <SharedContent />
      <Footer />
    </>
  );
}

export default SharedPage;
