import OrderConfirmContainer from "./OrderConfirmContainer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const scrums = [
  {
    url: "/",
    label: "Главная",
  },
  {
    url: "/",
    label: "Оформление заказа",
  },
];

export default function OrderConfirm() {
  return (
    <div className="container mx-auto px-3 md:px-0 mb-20">
      <Breadcrumbs items={scrums} />
      <OrderConfirmContainer />
    </div>
  );
}
