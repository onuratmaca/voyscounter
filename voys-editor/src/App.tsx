import { Switch, Route, Router as WouterRouter } from "wouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout";
import MergeOrders from "@/pages/MergeOrders";
import CountOrders from "@/pages/CountOrders";
import Settings from "@/pages/Settings";
import MockUpGenerator from "@/pages/MockUpGenerator";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={MergeOrders} />
        <Route path="/count-orders" component={CountOrders} />
        <Route path="/settings" component={Settings} />
        <Route path="/mockup-generator" component={MockUpGenerator} />
        <Route>
          <MergeOrders />
        </Route>
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <ToastContainer position="bottom-right" theme="colored" />
    </>
  );
}

export default App;
