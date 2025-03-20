import { faker } from "@faker-js/faker";
import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiBarChart2,
  FiRotateCcw,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";

faker.seed(123);
export const generateStats = () => [
  {
    title: "Profit",
    value: `$${faker.number.int({ min: 5000, max: 50000 })}`,
    icon: FiTrendingUp,
    isMain: true,
  },
  {
    title: "Customers",
    value: faker.number.int({ min: 500, max: 5000 }),
    icon: FiUsers,
  },
  {
    title: "Sales",
    value: `$${faker.number.int({ min: 10000, max: 50000 })}`,
    icon: FiShoppingCart,
  },
  {
    title: "Orders",
    value: faker.number.int({ min: 200, max: 2000 }),
    icon: FiBarChart2,
  },
  {
    title: "Revenue",
    value: `$${faker.number.int({ min: 50000, max: 200000 })}`,
    icon: FiTrendingUp,
  },
  {
    title: "Expenses",
    value: `$${faker.number.int({ min: 50000, max: 200000 })}`,
    icon: FiDollarSign,
  },
  {
    title: "Refunds",
    value: `$${faker.number.int({ min: 1000, max: 5000 })}`,
    icon: FiRotateCcw,
  },
];

// Generate customer list
export const customers = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  location: faker.location.city(),
  phone: faker.phone.number("+62 ###-####-####"),
  company: faker.company.name(),
  createdAt: faker.date.past().toLocaleDateString(),
}));

// Generate dummy transactions
export const transactions = Array.from({ length: 7 }, () => ({
  id: faker.string.uuid(),
  customer: faker.person.fullName(),
  amount: faker.finance.amount(50, 500, 2, "Rp "),
  date: faker.date.recent().toLocaleDateString(),
  status: faker.helpers.arrayElement(["Completed", "Pending", "Failed"]),
}));

export function generateFakeChartData() {
  return Array.from({ length: 12 }, (_, index) => ({
    month: new Date(2025, index).toLocaleString("default", { month: "short" }), // Nama bulan
    sales: faker.number.int({ min: 5000, max: 20000 }), // Fake angka penjualan
    customers: faker.number.int({ min: 100, max: 500 }), // Fake jumlah pelanggan baru
  }));
}

export function generateFakePieChartData() {
  return [
    { name: "New Customers", value: faker.number.int({ min: 30, max: 50 }) },
    { name: "Returning", value: faker.number.int({ min: 50, max: 70 }) },
    { name: "Referrals", value: faker.number.int({ min: 43, max: 65 }) },
    { name: "Social", value: faker.number.int({ min: 43, max: 65 }) },
  ];
}

export function generateFakeBarChartData() {
  return Array.from({ length: 7 }, () => ({
    name: faker.commerce.productName(),
    sales: faker.number.int({ min: 1000, max: 10000 }),
  }));
}

export const generateRevenueData = () => {
  return [
    { month: "Jan", revenue: Math.floor(Math.random() * 5000) + 1000 },
    { month: "Feb", revenue: Math.floor(Math.random() * 5000) + 1000 },
    { month: "Mar", revenue: Math.floor(Math.random() * 5000) + 1000 },
    { month: "Apr", revenue: Math.floor(Math.random() * 5000) + 1000 },
    { month: "May", revenue: Math.floor(Math.random() * 5000) + 1000 },
    { month: "Jun", revenue: Math.floor(Math.random() * 5000) + 1000 },
  ];
};

// Generate KPI Data
export const kpiData = [
  {
    label: "Total Revenue",
    value: faker.finance.amount(10000, 50000, 0),
    change: "+15%",
  },
  {
    label: "New Customers",
    value: faker.number.int({ min: 200, max: 1000 }),
    change: "+8%",
  },
  {
    label: "Sales Growth",
    value: faker.number.int({ min: 5, max: 20 }) + "%",
    change: "+3%",
  },
];
