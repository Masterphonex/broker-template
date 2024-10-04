import DashNavbar from "@/components/DashNavbar";

export const metadata = {
    title: "Dashboard",
    description: "This is the user Dashboard",
  };

  export default function RootLayout({ children }) {
    return (
     <div>
        <DashNavbar />
        {children}
     </div>
    );
  }
