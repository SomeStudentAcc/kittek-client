"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProfileContainer() {

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <div>
      <h2 className="text-center sm:text-start text-xl md:text-3xl mb-5">
        Профиль
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10">
        <div className="flex justify-center md:justify-start">
          <div className="flex justify-between">
            <div className="border  p-3 rounded-lg ">
              <h3>
                Имя: <span>John Doe</span>
              </h3>
              <h3>
                Пол: <span>Мужчина</span>
              </h3>
              <h3>
                Телефон: <span>+99893506200</span>
              </h3>
              <div className="flex gap-5"></div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-5">Ваши заказы</h3>
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Id</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Тип оплапты</TableHead>
                  <TableHead className="text-right">Сумма</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="md:hidden flex flex-col gap-5">
            {invoices.map((el) => (
              <div className="p-3 border rounded-2xl" key={el.invoice}>
                <div className="flex justify-between">
                  <h3>Id</h3>
                  <p>{el.invoice}</p>
                </div>
                <div className="flex justify-between">
                  <h3>Статус</h3>
                  <p>{el.paymentStatus}</p>
                </div>
                <div className="flex justify-between">
                  <h3>Тип оплапты</h3>
                  <p>{el.paymentMethod} </p>
                </div>
                <div className="flex justify-between">
                  <h3>Сумма</h3>
                  <p>{el.totalAmount} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
