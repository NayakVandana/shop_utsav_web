import InnerPageContainer from "@/components/InnterPageContainer";



export default function AdminDashboard() {
  return (

    <InnerPageContainer title="Shop Utsav">
      <div className="flex">     
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome to the admin panel. Use the sidebar to manage products, categories, and orders.</p>
      </div>
    </div>
    </InnerPageContainer>


   
  );
}